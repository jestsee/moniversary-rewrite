<script setup lang="ts">
interface Props {
  label?: string;
  placeholder?: string;
  error?: string;
  textArea?: boolean;
  modelValue: string;
}
withDefaults(defineProps<Props>(), { textArea: false });

const emit = defineEmits(["update:modelValue"]);
function updateValue(value: Event) {
  const temp = value.target as HTMLInputElement;
  emit("update:modelValue", temp.value);
}
</script>
<template>
  <div class="">
    <p class="text-sm text-gray-500 mb-1 capitalize">{{ label }}</p>
    <textarea
      v-if="textArea"
      @input="(val) => updateValue(val)"
      :class="[
        'w-full border-2 rounded-lg py-2 px-3 outline-none',
        { 'border-red-600': error },
      ]"
      :placeholder="placeholder"
    ></textarea>
    <input
      v-else
      @input="(val) => updateValue(val)"
      :class="[
        'w-full border-2 rounded-lg py-2 px-3 outline-none',
        { 'border-red-600': error },
      ]"
      :placeholder="placeholder"
    />
    <p class="text-red-700 text-sm">{{ error }}</p>
  </div>
</template>
