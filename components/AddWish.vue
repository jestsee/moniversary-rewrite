<script setup lang="ts">
import Modal from "./Modal.vue";
import Input from "./Input.vue";
import { ref, watch } from "vue";
import type { Wish } from "~/types/wish";

const { isOpen, openModal, closeModal } = useModal();

interface Props {
  reload: CallableFunction;
}
const props = withDefaults(defineProps<Props>(), {});

const initData: Wish = {
  title: "",
  from: "",
  content: "",
};
const data = ref<Wish>(initData);
const dataToSubmit = ref<Wish>();
const errorTitle = ref<string>();
const errorFrom = ref<string>();
const errorWish = ref<string>();
const error = ref<string>();

const { pending, status } = useFetch("/api/notion", {
  method: "post",
  immediate: false,
  body: dataToSubmit,
  onResponse({ response }) {
    if (response.status !== 200) {
      error.value = response.statusText
      return;
    }
    closeModal();
    props.reload();
    error.value = undefined;
  },
});

const handleClose = () => {
  closeModal();
};

const handleOpen = () => {
  data.value = { ...initData };
  errorTitle.value = undefined;
  errorFrom.value = undefined;
  errorWish.value = undefined;
  openModal();
};

const errorCheck = (
  field: string,
  min: number,
  err?: string
): string | undefined => {
  if (field.length < min && field.length > 0) return "singkat amat";
  else if (err && field === "") return "jangan kosong dong weh";
  else {
    err = undefined;
  }
};

const validate = (): boolean => {
  let canSubmit = true;
  if (data.value.title === "") {
    errorTitle.value = "jangan kosong dong weh";
    canSubmit = false;
  }
  if (data.value.from === "") {
    errorFrom.value = "jangan kosong dong weh";
    canSubmit = false;
  }
  if (data.value.content === "") {
    errorWish.value = "jangan kosong dong weh";
    canSubmit = false;
  }
  return canSubmit;
};

const submit = () => {
  if (errorTitle.value || errorFrom.value || errorWish.value) return;

  if (validate()) {
    dataToSubmit.value = {...data.value};
  }
};

watch(
  () => [data.value.title],
  () => {
    errorTitle.value = errorCheck(data.value.title, 5, errorTitle.value);
  }
);
watch(
  () => [data.value.from],
  () => {
    errorFrom.value = errorCheck(data.value.from, 3, errorFrom.value);
  }
);
watch(
  () => [data.value.content],
  () => {
    errorWish.value = errorCheck(data.value.content, 10, errorWish.value);
  }
);
</script>

<template>
  <button
    @click="openModal"
    class="h-fit rounded-full bg-black shadow-lg group-hover:motion-safe:animate-bounce lg:shadow-none"
  >
    <IconsPlus class="h-16 text-white" />
  </button>
  <Modal
    title="Drop your wish"
    :is-open="isOpen"
    :open-modal="handleOpen"
    :close-modal="handleClose"
    :submit="submit"
    :loading="pending && status === 'pending'"
  >
    <form @submit="" class="grid grid-cols-1 gap-y-4">
      <Input
        v-model="data.title"
        label="title"
        placeholder="hbd gitu ato apa kek.."
        :error="errorTitle"
      />
      <Input
        v-model="data.from"
        label="from"
        placeholder="dari siapa ni?"
        :error="errorFrom"
      />
      <Input
        v-model="data.content"
        label="wish"
        placeholder="yang panjangan gitu..."
        :error="errorWish"
        text-area
      />
      <p v-if="error" class="text-red-600 text-sm -mt-[0.8rem]">{{ error }}</p>
    </form>
  </Modal>
</template>
