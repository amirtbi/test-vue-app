<template>
  <div class="todo-container">
    <h2>List of todo</h2>
    <ul class="todoLists">
      <li data-test="list" v-for="(todo, index) in listOfTodos">
        <p>{{ todo.title }} - {{ todo.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { toRef } from 'vue'

const props = defineProps({
  todoList: {
    type: Array,
    required: true,
  },
})

const listOfTodos = toRef(props, 'todoList')
</script>

<style scoped>
.todo-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 2rem;
}
ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0;
}
li {
  list-style: none;
  margin: 0.25rem;
}
</style>
