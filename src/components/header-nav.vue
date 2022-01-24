<template>
  <nav id="nav">
    <ul>
      <li><router-link to="/" exact>Home</router-link></li>
      <li><router-link to="/code-splitting">코드 스플리팅</router-link></li>
      <li><router-link to="/dynamic">동적라우팅</router-link></li>
      <li><router-link to="/nav-methods">네비게이션 메소드</router-link></li>
      <li>
        <router-link to="/nav-guard">네비게이션 가드</router-link>
      </li>
      <li><router-link to="/my-page">My page</router-link></li>
      <li>
        <router-link class="menu"
                        to="/redirect"
                        @mouseenter.native="isHovering = true"
                        @mouseleave.native="isHovering = false">리다이렉트
          <ul class="submenu" v-if="isHovering">
            <li>
              <a @click.prevent="routerPush('/redirect/submenu1')">서브1</a>
              <a @click.prevent="routerPush('/redirect/submenu2')">서브2</a>
            </li>
          </ul>
      </router-link>
      </li>
      <li><router-link to="/scroll-behavior">scrollBehavior</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "header-nav",
  data() {
    return {
      isHovering: false,
    }
  },
  methods: {
    showSub() {
      console.log(this.$refs.menu);
      this.$refs.menu.classList.add('show');
    },
    routerPush(path) {
      this.$router.push(path).catch(()=>{});
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
  text-align: left;
  padding: 30px 0 0 30px;
  width: 22%;
  box-sizing: border-box;
}
#nav ul{
  padding: 0;
}
#nav ul li a {
  padding: 5px 10px;
  font-size: 15px;
  box-sizing: border-box;
}
.menu .submenu {
  padding: 0;
}
.menu .submenu li a{
  line-height: 35px;
  font-size: 10px;
  padding: 0;
  z-index: 1;
}
a.router-link-active {
  color: #fff;
  font-weight: 700;
  background-color: #3b4452;
  border-radius: 5px;
  box-sizing: border-box;
}

</style>