<template>
  <h1>{{titleInfo}}</h1>
</template>

<script>
export default {
  name: "title-component",
  computed: {
    titleInfo() {
      return this.$route.meta.title;
    }
  },
}
</script>

<style scoped>
h1 {
  color: #000;

}
</style>