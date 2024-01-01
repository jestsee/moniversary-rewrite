export const scrollTo = (navEl: string) => {
  let element = document.querySelector(`#${navEl}`);
  element?.scrollIntoView({ behavior: "smooth" });
};
