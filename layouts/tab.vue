<template>
  <div>
    <Tab />
    <nuxt />
  </div>
</template>

<script>
import Tab from "~/components/Tab.vue";

export default {
  data: () => ({
    drawer: true
  }),
  components: {
    Tab
  }
};
</script>

<style>
html {
  background-color: config("colors.white");
  font-family: config("fonts.sans");
}
.scrollbar::-webkit-scrollbar {
  display: none;
}
</style>