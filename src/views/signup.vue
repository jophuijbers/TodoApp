<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-row>
        <v-col>
          <h1>Sign up</h1>
          <v-text-field :rules="username_rules" v-model="username" label="Username" color="white"></v-text-field>
          <v-text-field
            :rules="password_rules"
            :append-icon="pwd_show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="pwd_show ? 'text' : 'password'"
            @click:append="pwd_show = !pwd_show"
            v-model="password"
            label="Password"
            color="white"
          ></v-text-field>
          <v-text-field
            :rules="re_password_rules"
            :append-icon="re_pwd_show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="re_pwd_show ? 'text' : 'password'"
            @click:append="re_pwd_show = !re_pwd_show"
            v-model="re_password"
            label="Confirm password"
            color="white"
          ></v-text-field>
          <p>
            Already have an account?
            <router-link to="/login">Log in</router-link>
          </p>
          <v-btn :disabled="!valid" @click.prevent="submit" color="success">Sign up</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      valid: "",
      username: "",
      password: "",
      re_password: "",
      pwd_show: false,
      re_pwd_show: false,
      username_rules: [
        v => !!v || "Please fill in your username",
        v => v.length >= 6 || "Username must be atleast 6 characters"
      ],
      password_rules: [
        v => !!v || "Please fill in your password",
        v =>
          this.hasUppercase(v) ||
          "Passwword must contain at least 1 uppercase letter",
        v => /\d/.test(v) || "Password must contain atleast 1 number",
        v => (v && v.length >= 8) || "Password must be longer than 8 characters"
      ],
      re_password_rules: [
        v => v === this.password || "Passwords must be identical"
      ]
    };
  },
  methods: {
    submit() {
      this.valid = this.$refs.form.validate();
      if (this.valid === true) {
        console.log("login");
      }
    },
    hasUppercase(string) {
      for (var i = 0; i < string.length; i++) {
        if (isNaN(string[i])) {
          if (string[i].toUpperCase() === string[i]) {
            return true;
          }
        }
      }
      return false;
    }
  }
};
</script>