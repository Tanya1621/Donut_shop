<template>
<ul class="flex-row flex-wrap gap-4 my-14">
  <li class="card_list">
    <div class="card_list__card"></div>
  </li>
</ul>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent( {
  name: "CardList"
})
</script>

<style scoped>
.card_list__card {
  width: 400px;
  height: 450px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 0 10px 0px #e3cafa;
}
</style>