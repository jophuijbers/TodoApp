<template>
  <v-bottom-navigation fixed shift>
      <v-btn v-for="link in links" :key="link.text" :to="link.route">
          <span>{{ link.text }}</span>
          <v-icon>{{ link.icon }}</v-icon>
      </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { text: "ToDo", icon: "assignment_turned_in", route: "/" },
        { text: "Add", icon: "add_box", route: "/add" },
        { text: "Profile", icon: "person", route: "/profile" },
        { text: "Settings", icon: "settings", route: "/settings" },
      ]
    };
  }
};
</script>

<style scoped>
    .v-btn:not(.v-btn--round).v-size--default {
        height: 100%;
    }
</style>