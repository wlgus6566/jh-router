<template>
  <div class="btn-wrap">
    <div>
        1. push :
        <button class="push" @click="push">push to dynamic</button>
        <router-link class="btn-a" to="/dynamic">router link to dynamic</router-link>
        <div>- push with Query :
        <div>
          <button
              class="page"
              v-for="(pageNum, idx) in pageInfo.pageList" :key="idx"
              @click="pushWithQuery(pageNum)"
          >{{pageNum}}</button>
        </div>
        </div>
    </div>
    <div>
      2. replace :
      <button class="replace" @click="replace">replace dynamic</button>
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
      pageInfo: {
        pageList: [1,2,3,4,5],
        size: '3',
      }
    }
  },
  methods: {
    // push: <router-link :to="..."> 와 같음
    push() {
      // object 전달
      this.$router.push({path: '/dynamic'})
      //this.$router.push({name: 'dynamic-list'})
      // string 전달
      //this.$router.push('/dynamic')
    },
    pushWithQuery(pageNum) { // query와 함께 전달
      this.$router
          .push({
            path: '/nav-methods',
            query: { page: pageNum, size: this.pageInfo.size }
          })
          //.catch(()=>{});
      //라우터 리다이렉션 오류 - catch로 오류를 무시하기

    },
    replace() {
      this.$router.replace('/dynamic')
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
  // 컴포넌트 가드
 /* beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter: 컴포넌트로 들어오기 전에 수행');
    next()
    // 컴포넌트가 화면에 표시되기 전에 수행될 로직
    // 컴포넌트는 아직 생성되지 않은 시점 -`this`로 컴포넌트를 접근할 수 없음
  },

  beforeRouteLeave (to, from, next) {
    // 기존 컴포넌트에서 벗어나기 전에 호출되는 훅
    // 이 훅은 주로 게시글 등을 저장하지 않은 상태로 다른 곳으로 이동하는 것을 방지하는 데 사용됌.
/!*    const answer = window.confirm('저장되지 않은 작업이 있습니다! 정말 나갈까요?');
    if (answer) {
      next();
    } else {
      next(false);
    }*!/
  },
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate: 라우터가 업데이트 되어도 기존 컴포넌트에 머물러있을 경우 발생하는 훅');
    next()
    // 라우터가 업데이트 되어도 기존 컴포넌트에 머물러있을 경우 발생하는 훅
    // 예를 들어 게시판의 첫 번째 페이지 "/board/page/1"에서 다음 글 목록을 불러오기 위해 /board/page/2"로 게시판의 페이지를 이동할 때
  },*/
}
</script>

<style scoped>
.btn-a {
  line-height: 30px;
  padding: 0 10px;
  font-size: 13px;
  background: lightpink;
  border-radius: 8px;
  border: 1px solid #2c3e50;
}
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
   color: #fff;
   background-color: #3b4452;
   border-radius: 5px;
   border: none;
   outline: none;
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