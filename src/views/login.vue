<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-row>
        <v-col>
          <h1>Login</h1>
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
          <p>
            No account?
            <router-link to="/signup">Sign up</router-link>
          </p>
          <v-btn :disabled="!valid" @click.prevent="submit" color="success">Login</v-btn>
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
      pwd_show: false,
      username_rules: [v => !!v || "Please fill in your username"],
      password_rules: [v => !!v || "Please fill in your password"]
    };
  },
  methods: {
    submit() {
      this.valid = this.$refs.form.validate();
      if (this.valid === true) {
        console.log("login");
      }
    }
  }
};
</script>