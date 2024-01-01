import { ref } from "vue"

const useModal = () => {
  const isOpen = ref(false)
  const closeModal = () => {
    isOpen.value = false
  }
  const openModal = () => {
    isOpen.value = true
  }

  return {
    isOpen, openModal, closeModal
  }
}

export { useModal }