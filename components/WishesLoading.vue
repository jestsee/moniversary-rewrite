<script setup lang="ts">
function generateHeight(index: number): string {
  const numbers = ["h-[160px]", "h-[240px]", "h-[320px]", "h-[400px]"];
  return numbers[index % 4];
}
</script>
<template>
  <div class="mx-auto flex w-full gap-x-6 py-10 xl:w-[1240px] h-screen">
    <div class="sticky w-1/4 top-36 hidden self-start lg:block">
      <WishesLoadingContainer class="aspect-square" />
    </div>
    <div class="columns-1 w-full h-full gap-6 sm:columns-2 xl:columns-3">
      <template v-for="index in 6">
        <div class="mb-6 break-inside-avoid">
          <WishesLoadingContainer :class="generateHeight(index)" />
        </div>
      </template>
    </div>
  </div>
</template>
