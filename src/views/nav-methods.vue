<template>
  <div class="btn-wrap">
    <div>
        1. push :
        <button class="push" @click="push">push to about</button>
        <router-link to="/about">router link to about</router-link>
        <div>- push with Query :
        <button
            class="page"
            v-for="(number, idx) in numList" :key="idx"
            @click="pushWithQuery(number)"
        >{{number}}</button>
        </div>
    </div>
    <div>
      2. replace :
      <button class="replace" @click="replace">replace about</button>
    </div>
    <div>
      3. go:
      <div>
        - 뒤로가기 :
        <button class="goBack" @click="goBack">goBack</button>
      </div>
      <div>
        - 앞으로가기 :
        <button class="goNext" @click="goNext">go next</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-methods",
  data() {
    return {
      numList: [1,2,3]
    }
  },
  methods: {
    // push: <router-link :to="..."> 와 같음
    push() {
      // string 전달
      this.$router.push('/about');
      // object 전달
      // this.$router.push({name: 'nav-methods'});
      // this.$router.push({path: '/about'})
    },
    pushWithQuery(pageNum) { // query와 함께 전달
      this.$router.push({ path: '/nav-methods', query: { page: pageNum, size: '3' } }).catch(()=>{});
      //nav-methods?page=1
      //라우터 리다이렉션 오류 - catch로 오류를 무시하기
    },
    replace() {
      this.$router.replace('/about')
      //이름에 나타나듯이 현재 페이지가 다른 페이지로 대체되는 것입니다.
      //히스토리에 현재 페이지를 저장하지 않고 이동합니다.
      //그래서 히스토리에 경로가 남지 않으므로 뒤로가기 눌렀을 때 원래 페이지로 돌아올 수 없습니다.
    },
    //히스토리 스택에서 앞 또는 뒤로 전달된 정수만큼 이동합니다.
    goBack() {
      this.$router.go(-1)
    },
    goNext() {
      this.$router.go(1)
    },
  },
/*  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter');
    next()
    // nav-methods 컴포넌트가 화면에 표시되기 전에 수행될 로직
    // nav-methods 컴포넌트는 아직 생성되지 않은 시점 -`this`로 bout-list 컴포넌트를 접근할 수 없음
  },
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate');
    next()
    // 화면에 표시된 컴포넌트가 변경될 때 수행될 로직
    // `this`로 nav-methods컴포넌트를 접근할 수 있음
  },
  beforeRouteLeave (to, from, next) {
    console.log('beforeRouteLeave');
    next()
    // url 값이 변경되기 직전의 로직
    // `this`로 nav-methods 컴포넌트를 접근할 수 있음
    //next()
  }*/
}
</script>

<style scoped>
.btn-wrap {
  text-align: left;
}
 div {
   width: 100%;
   color: #000;
   font-size: 25px;
 }
 button {
   margin-top: 30px;
   margin-left: 20px;
   line-height: 30px;
   padding: 0 10px;
   background: darksalmon;
 }
 .page {
   margin: 3px;
 }
 a {
   display: inline-block;
   margin-left: 10px;
   font-size: 20px;
 }
 .btn-wrap > div {
   margin-top: 20px;
 }
.btn-wrap > div > span {
  font-size: 18px;
}
</style>