<template>
   <Header  v-if="showHeader"></Header>
   <router-view class="view"/>
  </template>
<script>
import Header from "../src/components/global/Header.vue";
//import FooterStore from "@/components/global/FooterStore.vue";

export default {
  name: "App",
  components: {
    Header,
    //FooterStore
  },
  computed: {
    showHeader() {
      return this.$store.state.showHeader;
    }
  }
  // computed: {
  //   getDarkMode() {
  //     return this.$store.state.darkMode;
  //   },
  // },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
