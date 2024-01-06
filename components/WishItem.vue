<script setup lang="ts">
import type { Wish } from "~/types/wish";

interface Props {
  wish: Wish;
}
withDefaults(defineProps<Props>(), {});
const { isOpen, openModal, closeModal } = useModal();
</script>
<template>
  <div>
    <div
      @click="openModal"
      class="flex cursor-pointer flex-col gap-y-4 rounded-3xl bg-white px-7 py-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.05)] transition-all hover:scale-105"
    >
      <h3 class="cut-2 text-2xl font-bold">{{ wish.title }}</h3>
      <p class="cut text-gray-700">
        {{ wish.content }}
      </p>
      <span
        class="mt-2 w-fit max-w-[180px] self-end overflow-hidden text-ellipsis whitespace-nowrap rounded-full bg-black px-4 py-1.5 text-white"
      >
        From {{ wish.from }}
      </span>
    </div>
    <Modal
      :title="wish.title"
      :is-open="isOpen"
      :open-modal="openModal"
      :close-modal="closeModal"
      ><p class="mt-4">{{ wish.content }}</p>
      <h3 class="mb-4 mt-8 break-words font-semibold">- {{ wish.from }}</h3>
    </Modal>
  </div>
</template>

<style scoped>
.cut {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.cut-2 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
