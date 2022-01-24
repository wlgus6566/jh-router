<template>
  <div>
    <h3>문제상황</h3>
    <p>스크롤을 내린 상태에서 라우터를 통해 다른 페이지로 이동할 경우,
      스크롤이 초기화되지 않고 내려가있는 상태로 옮겨간다 </p>
    <div id="scrollHere">
      #scrollHere 스크롤 여기로 이동
    </div>
  </div>
</template>

<script>
export default {
  name: "scroll-behavior",
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