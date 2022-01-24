<template>
  <div>
    <h3>소개</h3>
    <p>scrollBehavior함수는 새로운 라우트로 이동 하고 다시 돌아왔을 때,
      기본에 보던 부분으로 위치하고 싶을 때 주로 사용합니다.</p>
    <div id="scrollHere">
      #scrollHere 스크롤 여기로 이동
    </div>
  </div>
</template>

<script>
export default {
  name: "scroll-behavior",
  mounted() {
    this.$router.push({name: 'scroll-behavior', hash: '#scrollHere'}).catch(()=>{});
  }
}
</script>

<style scoped>
#scrollHere {
  height: 1000px;
  background: lightpink;
  margin-top: 400px;
  padding-top: 30px;
  border-top: 1px solid red;
}
</style>