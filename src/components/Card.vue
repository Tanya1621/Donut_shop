<template>
  <div class="p-10 card_list__card">
    <h2 class="text-2xl text-black">{{card.title}}</h2>
    <img :src='card.image' />
    <div class="flex text-lg justify-between">
    <p class="text-lg text-black">{{card.description}}</p>
    <a class="text-black hover:text-pink-300" href="#">More info</a>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import type {IContent} from "@/data/data";

export default defineComponent({
  name: "CardComponent",
  props: {
    card: Object,
  }
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