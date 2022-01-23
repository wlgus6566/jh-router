<template>
  <div class="about-view">
    <div>
      <strong>제목: </strong><span>{{items[this.$route.params.id - 1].title}}</span>
    </div>
    <div>
      <strong>내용: </strong><textarea name="" id="" cols="30" rows="10">어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구</textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "about-view",
  data() {
    return {
      items: [
        {
          id: 1,
          title: '안녕하세요. 다이어트 고민이있습니다.',
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
.about-view {
  margin-top: 30px;
  border: 1px solid #000;
}
.about-view > div {
  display: flex;
  padding: 10px;
  text-align: left;
}
.about-view > div strong {
  display: inline-block;
  width: 100px;
}
textarea {
  vertical-align: top;
  width: 100%;
}
</style>