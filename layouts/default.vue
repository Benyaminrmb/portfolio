<script setup lang="ts">
import { definePageMeta } from "#imports";

const colorMode = useColorMode();
colorMode.value='light'
useHead({
  htmlAttrs: {
    lang: 'en',
    'data-theme': 'light'
  }
})
/*definePageMeta({
  colorMode: "light",
});*/
</script>

<template>
  <div class="mb-24 mt-6 flex flex-col items-center justify-center px-6">
    <div class="flex w-full max-w-4xl flex-col gap-36 print:gap-10">
      <app-header />
      <div class="flex flex-col gap-6 print:mt-10 print:gap-2">
        <h1
          class="text-3xl md:text-6xl gap-3 flex">
          <span class="font-black">Benyamin</span>
          <span class="font-extralight">Bolhasanii</span>
        </h1>
        <h2 class="md:text-xl">full-stack developer</h2>
        <h3 class="text-gray-500">AKA :
          <strong>BenyaminRmb</strong>
        </h3>
      </div>
      <nuxt-page />
    </div>
  </div>
</template>
