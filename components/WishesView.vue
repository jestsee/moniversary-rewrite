<script setup lang="ts">
const {
  data: wishes,
  refresh,
  pending: loading,
} = await useFetch("/api/notion");
</script>
<template>
  <div class="mx-auto flex w-full gap-x-6 py-10 xl:w-[1240px]">
    <div class="sticky top-36 hidden self-start lg:block">
      <AddWishContainer :reload="refresh" />
    </div>
    <div class="columns-1 gap-6 sm:columns-2 xl:columns-3">
      <WishesContent :items="wishes ?? []" :loading="loading" />
    </div>
  </div>
  <div class="fixed right-8 bottom-8 lg:hidden">
    <AddWish :reload="refresh" />
  </div>
</template>
