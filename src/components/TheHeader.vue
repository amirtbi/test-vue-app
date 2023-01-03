<template>
  <header>
    <nav>
      <ul>
        <li v-for="link in navigateLinks" :key="link.id">{{ link.title }}</li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
const props = defineProps({
  links: {
    type: Array,
    required: true,
  },
})

const navigateLinks = props.links
</script>

<style scoped>
header {
  width: 100%;
  padding: 2rem;
  background-color: gray;
  display: flex;
}

header > nav > ul {
  display: flex;
  width: 100%;
  justify-content: center;
}

header > ul > li {
  list-style-type: none;
}

ul > li {
  margin: 0.75rem;
  color: white;
  list-style-type: none;
}
ul > li:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>
