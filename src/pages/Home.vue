<template>
  <div>
    <div v-for="todo in todos" :key="todo.id" data-test="todo">
      {{ todo.text }}
    </div>

    <div>
      <form data-test="form" @submit.prevent="createNewTodo">
        <input type="text" data-test="new-todo" v-model="newToDo" />
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const todos = ref([{ id: 1, text: 'Learn vue.js 3', completed: false }])

const newToDo = ref('')

// Create a new todo and add it to todos list
const createNewTodo = () => {
  todos.value.push({ id: 2, text: newToDo.value, completed: false })
}
</script>
