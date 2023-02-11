<template>
  <div class="flex gap-10 print:hidden">
    <nuxt-link
      to="/"
      class="text-sm py-1 border-b-transparent border-b-2 hover:border-blue-600"
      >About</nuxt-link
    >

    <nuxt-link
      class="text-sm py-1 border-b-transparent border-b-2 hover:border-blue-600"
      to="/resume"
      >Resume</nuxt-link
    >
  </div>
</template>
<style>
.router-link-active {
  @apply border-blue-600;
}
</style>
