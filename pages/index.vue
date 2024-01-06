<script setup lang="ts">
useHead({title: "Cie Tua"})
</script>

<template>
  <div id="header" class="mx-10 mr-16 flex h-[100vh] bg-white pt-24 lg:block">
    <Header />
  </div>
  <div id="wishes" class="bg-gray-100 px-10 pt-16 lg:pt-20">
    <Suspense>
      <WishesView />
      <template #fallback>
        <WishesLoading />
      </template>
    </Suspense>
  </div>
  <div id="footer" class="bg-black px-10 text-white"><Footer /></div>
</template>
