<script setup lang="ts">
const { scrollTo, updateScroll, scrollPosition } = useScroll();
const menuClicked = ref(false);
const handleMenu = () => {
  menuClicked.value = !menuClicked.value;
  let elem = document.querySelector(".icon");
  if (!elem?.classList.contains("animate-[spin_250ms_ease-in-out_infinite]")) {
    elem?.classList.add("animate-[spin_250ms_ease-in-out_infinite]");
  }
  setTimeout(() => {
    elem?.classList.remove("animate-[spin_250ms_ease-in-out_infinite]");
  }, 250);
};
onMounted(() => {
  window.addEventListener("scroll", updateScroll);
});
</script>
<template>
  <div
    :class="[
      'fixed z-20 flex w-full justify-center',
      {
        ' bg-black text-white transition-all duration-150':
          scrollPosition > 100,
      },
    ]"
  >
    <div
      :class="[
        'flex w-full flex-col justify-between py-8 transition-all duration-500 md:flex-row xl:w-[1240px] xl:px-0',
        { 'py-4 transition-all duration-700': scrollPosition > 100 },
      ]"
    >
      <div class="flex items-center justify-between px-10 xl:px-0">
        <div class="cursor-pointer text-3xl font-extrabold">Cie tua.</div>
        <button class="icon" @click="handleMenu">
          <IconsMenu v-if="!menuClicked" class="h-7 md:hidden" />
          <IconsClose v-else class="h-7 md:hidden" />
        </button>
      </div>
      <ul
        :class="[
          'absolute -z-10 flex w-full flex-col items-center md:gap-x-20 lg:gap-x-[6.5rem] gap-y-2 pb-[2.05rem] md:relative md:top-0 md:z-0 md:w-fit md:flex-row md:bg-transparent md:pb-0',
          scrollPosition > 100 ? 'bg-black' : 'bg-white',
          menuClicked
            ? 'top-[4rem] pb-4 pt-2 transition-all duration-500 md:duration-150'
            : '-top-[150px] transition-all duration-500 md:duration-150',
          { ' bg-black md:bg-transparent': scrollPosition > 100 },
        ]"
      >
        <li
          @click="scrollTo('header')"
          class="cursor-pointer text-lg font-semibold underline-offset-4 hover:underline"
        >
          Home
        </li>
        <li
          @click="scrollTo('wishes')"
          class="cursor-pointer text-lg font-semibold underline-offset-4 hover:underline"
        >
          Wishes
        </li>
        <li
          @click="scrollTo('footer')"
          class="cursor-pointer text-lg font-semibold underline-offset-4 hover:underline"
        >
          Outro
        </li>
      </ul>
      <button
        class="mt-2 mr-10 hidden w-fit self-center rounded-full border-2 border-white bg-black py-1.5 px-6 text-lg font-semibold text-white md:block xl:mr-0"
      >
        Bonus
      </button>
    </div>
  </div>
</template>
