import {ref,computed} from 'vue'

export const useTodo = ()=>{


    const status = ref(null)

    const filteredToDo = ref([])

    const todoList = ref([])


    // Add new todo to list 
    const createToDo = (newTodo)=>{

        todoList.value.push(newTodo)
    }


    const computedFilterData = computed(()=>{
        
        if(filteredToDo.value.length > 0 && !!filteredToDo.value){
            return filteredToDo.value
        }else{
            return todoList.value
        }
    
    })
    const filterData = (searchValue)=>{

        if(searchValue !==''){

                filteredToDo.value = todoList.value.filter((todo)=>todo.title.includes(searchValue))
        }else{
            filteredToDo.value = todoList.value
        }
    }

    const findData = (id)=>{
        
        if(typeof id ==='number'){
            return todoList.value.find(todo=>todo.id ===id)
        }else{

            throw new Error("Type of id is not provided")
        }
    }

    return {status,createToDo,filterData,todoList,filteredToDo,findData,computedFilterData}
}