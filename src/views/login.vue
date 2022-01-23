<template>
<div>
  <form action="#" @submit.prevent>
    <div class="input-wrap">
      <label>아이디:</label>
      <input type="text" placeholder="아이디를 입력하세요">
    </div>
    <div class="input-wrap">
      <label>비밀번호:</label>
      <input type="password" placeholder="비밀번호를 입력하세요">
    </div>
    <button>로그인</button>
  </form>

</div>
</template>

<script>
export default {
  name: "login"
}
</script>

<style scoped>

.input-wrap {
}
.input-wrap label {
   color: #000;
   font-size: 20px;
 }
</style>