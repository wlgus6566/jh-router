<template>
  <div class="home">
    <h2>목차</h2>
    <ul class="ul">
      <li>1. 라우터 메타 필드</li>
      <li>2. 코드 스플리팅</li>
      <li>3. 동적 라우트 매칭</li>
      <li>4. 라우터 네비게이션 메서드</li>
      <li>
        5. 라우터 네비게이션 가드<br/>
        <p>- Vue Router의 라이프사이클 훅</p>
      </li>
      <li>6. 리다이렉트 </li>
<!--      <li>7. scrollBehavior </li>-->
    </ul>
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
.ul {
  margin-bottom: 500px;
}
.home {
  height: 2000px;
}

h2 {
  font-size: 20px;
  text-align: left;
  width: 100%;
  padding-left: 40px;
  margin: 0;
}
ul {
  margin-top: 20px;
}
ul li {
  font-size: 18px;
  text-align: left;
  margin-top: 15px;
}
ul li p {
  margin: 0;
  font-size: 15px;
}
</style>