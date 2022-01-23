<template>
  <div class="about">
    <div class="a-wrap">
      <ul>
        <li v-for="(item, idx) in items" :key="idx">
          <span>{{item.id}}</span>
          <router-link :to="`/about/${item.id}`">{{item.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "about-list",
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

.a-wrap {
  font-size: 18px;
}
li {
  display: flex;
  border: 1px solid #000;
}
li span {
  display: block;
  width: 30px;
  color: #000;

}
li a {
  display: block;
  margin-left: 5px;
  font-size: 15px;
}

</style>