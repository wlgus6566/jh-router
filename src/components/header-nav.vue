<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/nav-methods">네비게이션 메소드</router-link>
    <router-link to="/nav-guard">네비게이션 가드</router-link>
    <router-link to="/my-page">My page</router-link>
    <router-link class="menu"
                 to="/redirect"
                 @mouseenter.native="isHovering = true"
                 @mouseleave.native="isHovering = false">
      리다이렉트
      <ul class="submenu" v-if="isHovering">
        <li>
          <router-link to="/redirect/submenu1">서브메뉴1</router-link>
          <router-link to="/redirect/submenu1">서브메뉴2</router-link>
        </li>
      </ul>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "header-nav",
  data() {
    return {
      isHovering: false
    }
  },
  methods: {
    showSub() {
      console.log(this.$refs.menu);
      this.$refs.menu.classList.add('show');
    }
  },
}
</script>

<style scoped>
a {
  display: block;
  margin-bottom: 10px;
}
#nav {
  position: fixed;
  left: 0;
  top: 0;
  padding: 30px 0 0 30px;
  width: 20%;
  text-align: left;
}
.menu {
  position: relative;
}
.menu .submenu {
  background: burlywood;
  line-height: 35px;
  font-size: 12px;
}

</style>