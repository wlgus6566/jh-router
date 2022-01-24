<template>
  <div>
    <strong>{{this.$route.params.id}}</strong>
    <div class="dynamic-view" v-if="items[this.$route.params.id - 1]">
      <div>
        <strong>제목: </strong><span>{{items[this.$route.params.id - 1].title}}</span>
      </div>
      <div>
        <strong>내용: </strong>
        <textarea cols="30" rows="10">
        어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
      </textarea>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "dynamic-view",
  data() {
    return {
      items: [
        {
          id: 1,
          title: '안녕하세요. 고민이있습니다.',
        },
        {
          id: 2,
          title: '하루에 맥주 하루 한 캔 정도는 괜찮나요?'
        },
        {
          id: 3,
          title: '공복 유산소 vs 저녁 먹고 운동'
        }
      ]
    }
  },
}
</script>

<style scoped>
div {
  color: #000;
  font-size: 25px;
}
span {
  font-size: 18px;
  display: inline-block;
  margin-left: 10px;
}
.dynamic-view {
  margin-top: 30px;
  border: 1px solid #000;
}
.dynamic-view > div {
  display: flex;
  padding: 10px;
  text-align: left;
}
.dynamic-view > div strong {
  display: inline-block;
  width: 100px;
}
textarea {
  vertical-align: top;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}
</style>