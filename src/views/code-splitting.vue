<template>
<div>
  <h3>소개</h3>
  <ul>
    <li>1. 코드를 다양한 청크(chunk)로 나눌 수 있으며 필요에 따라 로드할 수 있다.</li>
    <li>2. 페이지 렌더링에 필요한 초기 응답 크기를 줄여준다.</li>
    <li>3. 코드 스플리팅을 사용하면 로드 시간을 단축하여 사이트 성능을 향상시킨다.</li>
  </ul>
  <h3>방법</h3>
  <p>component를 import 시킬 때 import 구문을 반환하는 함수를 작성해주기만 하면 끝!</p>
</div>
</template>

<script>
export default {
  name: "code-splitting"
}
</script>

<style scoped>
ul li {
  margin-top: 10px;
  font-size: 15px;
  text-align: left;
  padding: 0;
}
ul {
  padding: 0;
}


</style>