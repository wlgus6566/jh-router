<template>
<div>
  <h3>소개</h3>
  <ul>
    <li>1. 코드를 다양한 청크(chunk)로 나눌 수 있으며 필요에 따라 로드할 수 있다.</li>
    <li>2. 페이지 렌더링에 필요한 초기 응답 크기를 줄여준다.</li>
    <li>3. 각 URL로 이동할때마다 해당하는 javascript파일을 로드해서 화면을 렌더링한다</li>

  </ul>
  <h3>방법</h3>
  <p>component를 import 시킬 때 화살표 함수를 이용해서, 필요한 자바스크립트 파일을 import한다.</p>
  <h3>결과</h3>
  <p>.
  결과적으로, 최초 애플리케이션 접속 시 로딩 시간이 줄어들게 된다 => 퍼포먼스 향상</p>
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
  line-height: 1.5;
}
ul {
  padding: 0;
}


</style>