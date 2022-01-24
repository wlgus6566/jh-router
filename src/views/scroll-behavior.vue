<template>
  <div>
    <h3>소개</h3>
    <p>클라이언트 측 라우팅을 사용할 때 새로운 경로로 이동할 때 맨 위로 스크롤하거나
      실제 페이지를 다시 로드하는 것처럼 컨텐츠 항목의 스크롤 위치를 유지할 수 있습니다.
      vue-router는 이러한 것들을 할 수 있으며, 라우트 탐색에서 스크롤 동작을 완전히
      사용자 정의할 수 있게합니다.</p>
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