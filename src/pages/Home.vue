<template>
  <section class="main-section">
    <Show show />
    <p data-test="text">{{ text }}</p>
    >
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
        <div class="form-field">
          <BaseInput data-test="title" label="title" v-model="todo.title" />
        </div>
        <div class="form-field">
          <BaseInput
            data-test="description"
            label="Description"
            v-model="todo.description"
          />
        </div>

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
import Show from '../components/Show.vue'
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

const text = ref('')
const searchValue = ref('')
const todos = ref([])

watch(searchValue, () => {
  console.log('change search...', searchValue.value)
  filterData(searchValue.value)
})

const addToDo = () => {
  text.value = 'added'
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
