<template>
  <div id="app">
    <header-nav/>
    <component :is="layoutType"/>
  </div>
</template>

<script>

import HeaderNav from "@/components/header-nav";
import layout2 from "@/layout/layout1";
import layout1 from "@/layout/layout2";
export default {
  name: 'App',
  components: {
    layout2,
    layout1,
    HeaderNav
  },
  computed: {
    layoutType() {
      const layout = this.$route.meta.layout;
      return layout ? layout : 'layout1'
    }
  },
}
</script>

<style>
#app {
  display: flex;
  justify-content: flex-end;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

li {
  list-style: none;
}
.view {
  flex: 1;
  height: 200px;
  width: 80%;
  max-width: 80%;
}
.view > div{
  font-size: 35px;
  padding: 30px;
  box-sizing: border-box;
}
</style>
