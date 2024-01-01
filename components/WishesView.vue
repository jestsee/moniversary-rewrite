<script setup lang="ts">
import WishesContent from "./WishesContent.vue";
import { watch } from "vue";
import AddWishContainer from "./AddWishContainer.vue";
import AddWish from "./AddWish.vue";
import Loading from "./Loading.vue";

// const { fetchWishes, wishes, loadingWish, reload } = useWish();
const {
  data: wishes,
  refresh,
  pending: loading,
} = await useFetch("/api/notion");
</script>
<template>
  <!-- <div
    v-if="loadingWish"
    class="flex h-[100vh] max-h-[750px] min-h-[720px] flex-col items-center justify-center"
  >
    <Loading class="animate-spin h-12"/>
  </div> -->
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
