<template>
  <v-app>
    <nav-bar app></nav-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import nav_bar from './components/Nav_bar.vue';

export default {
  components: {
    'nav-bar': nav_bar,
  },
};
</script>
