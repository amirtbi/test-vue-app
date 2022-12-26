<script setup>
import { useSummation } from './composables/calcValues'

const { summation, Sum } = useSummation()
</script>

<template>
  <main>
    <section>
      <div>
        <h1>Summation result:</h1>
        <p>{{ summation }}</p>
      </div>
      <div>
        <button @click="Sum([2, 3, 4])">Calc</button>
      </div>
      <div>
        <RouterView></RouterView>
      </div>
    </section>
  </main>
</template>
