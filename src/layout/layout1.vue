<template>
  <div class="view">
    layout1
    <title-component/>
    <router-view/>
  </div>
</template>

<script>
import TitleComponent from "@/components/title-component";
export default {
  name: "layout1",
  components: {TitleComponent}
}
</script>

<style scoped>
</style>