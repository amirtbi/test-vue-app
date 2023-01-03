<template>
  <div v-if="show">{{ greeting }}</div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({ show: Boolean })

const greeting = ref('Hello')
</script>
