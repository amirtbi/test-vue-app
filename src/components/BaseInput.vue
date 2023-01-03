<template>
  <input
    type="text"
    :value="modelValue"
    :placeholder="placeHolder"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
const props = defineProps({
  modelValue: { type: String },
  placeHolder: { type: String },
})
</script>

<style scoped>
.form-field {
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
}
.form-field > input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}
.form-field > label {
  margin-bottom: 0.25rem;
}
</style>
