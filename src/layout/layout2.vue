<template>
  <div class="view">
    layout2
    <TitleComponent/>
    <router-view/>
  </div>
</template>

<script>
import TitleComponent from "@/components/title-component";
export default {
  name: "layout2",
  components: {TitleComponent}
}
</script>

<style scoped>

</style>