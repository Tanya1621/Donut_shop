<template>
  <div class="p-10 card_list__card">
    <h2 class="text-2xl text-black">{{ card.title }}</h2>
    <img :src="card.image" class="w-96" :alt="card.title" />
    <div class="flex text-lg justify-between">
      <p class="text-lg text-black">{{card.description }}</p>
      <router-link class="text-black hover:text-pink-300" :to="'/' + card.name"
        >More info</router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { IContent } from "@/data/data";

export default defineComponent({
  name: "CardComponent",
  props: {
    card: {
      type: Object,
      required: true

    },
  },
});
</script>

<style scoped>
.card_list__card {
  width: 390px;
  height: 450px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 0 10px 0px #e3cafa;
}
</style>
