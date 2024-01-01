<script setup lang="ts">
import { scrollTo } from "~/utils";
</script>
<template>
  <div
    class="mx-auto flex h-full flex-col items-center justify-center md:flex-row xl:w-[1240px]"
  >
    <img
      class="-ml-12 -mr-8 hidden md:block md:h-[520px] lg:mr-0 lg:h-[560px]"
      src="/peep-16.svg"
      alt="Hbd"
    />
    <div class="flex flex-col gap-y-7 lg:w-[600px]">
      <h1
        class="-mt-16 text-[13vw] font-extrabold leading-[1.15] md:text-[8vw] lg:mt-0 lg:text-8xl"
      >
        Happy Moniversary
      </h1>
      <p class="font-semibold">
        Disclaimer dulu kalo ini tampilannya lebih lengkap kalo buka di laptop.
        Akhirnya ya mon udah legal beli miras gosah minjem KTP meimei..
      </p>
      <button
        @click="scrollTo('wishes')"
        class="max-w-fit rounded-full bg-black py-3 px-6 font-semibold text-white underline-offset-4 hover:scale-110 hover:underline"
      >
        yuk cek 👇
      </button>
    </div>
  </div>
</template>
