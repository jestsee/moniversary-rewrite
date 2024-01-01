<script setup lang="ts">
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import Loading from "./Loading.vue";

interface Props {
  isOpen: boolean;
  openModal: CallableFunction;
  closeModal: CallableFunction;
  title?: string;
  submit?: CallableFunction;
  loading?: boolean;
}
withDefaults(defineProps<Props>(), {
  title: "test",
  loading: false,
  submit: undefined,
});
</script>
<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="() => !submit ? closeModal() : undefined" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle as="h3" class="mb-2 text-2xl font-bold leading-6">
                {{ title }}
              </DialogTitle>
              <div class="mt-2">
                <slot></slot>
              </div>

              <div class="mt-4 flex justify-end gap-x-3">
                <button
                  v-if="!loading && submit"
                  type="button"
                  class="rounded-xl border-2 border-black bg-white px-5 py-2 text-sm font-medium text-black"
                  @click="() => closeModal()"
                >
                  Cancel
                </button>
                <button
                  :disabled="loading"
                  type="submit"
                  :class="[
                    'flex items-center gap-x-1 rounded-xl border bg-black px-5 py-2 text-sm font-medium text-white',
                    { 'cursor-not-allowed bg-zinc-300': loading },
                  ]"
                  @click="() => submit ? submit() : closeModal()"
                >
                  <span v-if="loading"
                    ><Loading class="h-4 animate-spin"
                  /></span>
                  {{ submit ? 'Submit' : 'Back'}}
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
