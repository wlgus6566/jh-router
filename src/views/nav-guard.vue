<template>
  <div class="guard-wrap">
    <h3>네비게이션 가드란?</h3>
    <p>네비게이션 가드(navigation guard)란 뷰 라우터로 특정 URL에 접근할 때 해당 URL의 접근을 막는 방법을 말합니다. 예를 들어, 사용자의 인증 정보가 없으면 특정 페이지에 접근하지 못하게 할 때 사용하는 기술입니다.</p>
    <ul>
      <li>
        <h3>1. 전역가드</h3>
        <p>- beforeEach</p>
      </li>
      <li>
        <h3>2. 특정 라우터 가드</h3>
        <p>- beforeEnter: 전체 라우팅이 아니라 특정 라우팅에 대해서 가드를 설정하는 방법</p>
      </li>
      <li>
        <h3>3. 컴포넌트 가드</h3>

        <p>Vue Router의 라이프사이클 훅<br/>
          - beforeRouteEnter, beforeRouteUpdate, beforeRouteLeave: 라우터로 지정된 특정 컴포넌트에 가드를 설정하는 방법</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "nav-guard"
}
</script>

<style scoped>
.guard-wrap {
  padding: 20px;
  box-sizing: border-box;
}
h3 {
  margin: 0;
  font-size: 20px;
  text-align: left;
}
p {
  font-size: 14px;
  text-align: left;
}
ul {
  padding: 0;
}
</style>