<template>
  <div id="app">
    <header-nav/>
    <component :is="layoutType"/>
  </div>
</template>

<script>

import HeaderNav from "@/components/header-nav";
import layout1 from "@/layout/layout1";
import layout2 from "@/layout/layout2";

export default {
  name: 'App',
  components: {
    layout1,
    layout2,
    HeaderNav
  },
  computed: {
    layoutType() {
      const metalayout = this.$route.meta.layout;
      return metalayout ? metalayout : 'layout1'
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
  color: #2c3e50;
  margin-top: 30px;
  overflow-x: hidden;
}
h3 {
  text-align: left;
  font-size: 20px;
}
li {
  list-style: none;
  text-align: left;
}
h1 {
  background: #eee;
  padding: 20px;
  font-size: 28px;
}
.view {
  flex: 1;
  box-sizing: border-box;
  max-width: 75%;
}
.view > div{
  box-sizing: border-box;
}
a {text-decoration: none; outline: none; color: #000;}
a:hover, a:active {text-decoration: none; color: #000;}
a:active {
  color: blue;
}
button {
  cursor: pointer;
}

p {
  font-size: 16px;
  text-align: left;
}
</style>
