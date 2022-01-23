<template>
  <div class="home">
    <h1>INDEX</h1>
    <ul>
      <li>1. 라우트 메타 필드</li>
      <li>2. 동적 라우트 매칭</li>
      <li>3. 라우터 네비게이션 메서드</li>
      <li>4. 라우터 네비게이션 가드</li>
      <li>5. 리다이렉트 </li>
      <li>6. scrollBehavior </li>
    </ul>
    <div style="width: 100%">
      <button class="push" @click="goBack">go Back</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  }
}
</script>

<style scoped>
.home {
  height: 2000px;
}
div {
  background: cornflowerblue;
}
h1 {
  font-size: 25px;
  width: 100%;
  margin: 0;
}
ul {
  margin-top: 20px;
}
ul li {
  font-size: 20px;
  text-align: left;
}
</style>