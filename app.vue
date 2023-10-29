<script lang="ts" setup>
const siteMeta = useSiteMeta()
const year = computed(() => new Date().getFullYear())
</script>
<template>
  <Html dir="ltr">
  <Head>
    <SchemaOrgPerson
        :name="siteMeta.name"
        image="https://res.cloudinary.com/dl6o1xpyq/image/upload/f_jpg,q_auto:best,dpr_auto,w_240,h_240/images/harlan-wilton"
        :same-as="siteMeta.sameAs"
    />
  </Head>
  <Body class="text-gray-800 dark:text-gray-100 antialiased">
  <NuxtLoadingIndicator />
  <Header />
  </Body>
  </Html>
</template>
