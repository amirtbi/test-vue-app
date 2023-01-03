<template>
  <section class="main-section">
    <article class="text-center">
      <BaseInput
        data-test="search"
        v-model="searchValue"
        place-holder="Search todo..."
      />
    </article>
    <article>
      <TodoList :todo-list="computedFilterData" />
    </article>
    <article>
      <form data-test="form" @submit.prevent="addToDo" class="form-container">
        <BaseInput label="title" v-model="todo.title" />

        <BaseInput label="Description" v-model="todo.description" />

        <div>
          <button id="btn-todo">Submit todo</button>
        </div>
      </form>
    </article>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import TodoList from '../components/ToDoList.vue'
import BaseInput from '../components/BaseInput.vue'
import { useTodo } from '../composables/useTodo'

const {
  status,
  createToDo,
  filterData,
  todoList,
  filteredToDo,
  computedFilterData,
  findData,
} = useTodo()

const todo = ref({ title: '', description: '' })

const searchValue = ref('')
const todos = ref([])

watch(searchValue, () => {
  console.log('change search...', searchValue.value)
  filterData(searchValue.value)
})

const addToDo = () => {
  createToDo({
    title: todo.value.title,
    description: todo.value.description,
  })
}
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 2rem;
}

article {
  display: flex;
}
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

#btn-todo {
  background-color: green;
  color: white;
  margin-top: 2rem;
}
article.text-center {
  display: flex;
  justify-content: center;
}
</style>
