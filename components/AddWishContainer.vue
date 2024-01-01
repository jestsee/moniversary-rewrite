<script setup lang="ts">
interface Props {
  reload: CallableFunction;
}
withDefaults(defineProps<Props>(), {});
</script>
<template>
  <div class="hidden flex-col gap-y-6 lg:flex">
    <div
      class="group flex aspect-square max-h-[250px] min-w-[250px] cursor-pointer items-center justify-center rounded-3xl bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.06)] hover:scale-105"
    >
      <AddWish :reload="reload" />
    </div>
    <h2 class="mt-4 text-[2.5rem] font-extrabold leading-10">
      A little suggestion
    </h2>
    <p>
      Tulis apa aja bole, mau dihujat juga silahkan. Katanya dia senang dihujat.
      Tapi jangan SARA ya. Ati-ati muncul warn warna merah.
    </p>
  </div>
</template>
