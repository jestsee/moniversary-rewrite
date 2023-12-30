import { ref } from "vue";

const useScroll = () => {
  const scrollPosition = ref(0);

  const updateScroll = () => {
    scrollPosition.value = window.scrollY;
  };
  const scrollTo = (navEl: string) => {
    let element = document.querySelector(`#${navEl}`);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return { scrollTo, updateScroll, scrollPosition }
}

export { useScroll }