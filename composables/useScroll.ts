import { ref } from "vue";

const useScroll = () => {
  const scrollPosition = ref(0);

  const updateScroll = () => {
    scrollPosition.value = window.scrollY;
  };

  onMounted(() => {
    window.addEventListener("scroll", updateScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", updateScroll);
  });

  return { scrollPosition };
};

export { useScroll };
