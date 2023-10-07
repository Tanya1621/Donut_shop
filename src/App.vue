<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1 class="header__heading mb-4">Donut Shop</h1>
    <div class="wrapper">
      <nav class="flex justify-start gap-4">
        <RouterLink to="/" class="text-xl text-black hover:text-opacity-70 p-4">Home</RouterLink>
        <RouterLink to="/about" class="text-xl text-black hover:text-opacity-70 p-4">About</RouterLink>
        <RouterLink to="/cart" class="text-xl text-black hover:text-opacity-70 p-4">Cart</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.header__heading {
  font-family: 'Dancing Script';
  font-size: 50px;
  text-shadow: 1px 1px 15px #c29bec;
  color: #953753;
}

.router-link-exact-active {
  border-bottom: 2px #953753 solid;
}

</style>
