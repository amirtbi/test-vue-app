
import { mount } from "@vue/test-utils";
import {it,expect, describe } from "vitest";

import { useTodo } from "./useTodo";

import Home from '../pages/Home.vue'
import TodoList from '../components/ToDoList.vue'

describe("useTodo()",()=>{

    it("Should have correct length when new todo is added",()=>{
        
        // Input
        const todo = {title:"new todo",id:1,description:"new to do list has been added to list of todo"}

        const {todoList,createToDo} = useTodo()

        createToDo(todo)

        expect(todoList.value).toHaveLength(1)




    })


    it("Should render proper props",async ()=>{

        const todo = {title:"new todo",id:1,description:"new to do list has been added to list of todo"}
   

        const todoListsWrapper = mount(TodoList,{
            props:{
                todoList:[{title:todo.title,description:todo.description}]
            }
        })

        expect(todoListsWrapper.get('[data-test="list"]').html()).toContain(todo.description)

    })

  

    it("Should return proper data when filtering",()=>{

         // Input
         const todo1 = {title:"new todo",id:1,description:"new to do list has been added to list of todo"}
         const todo2 = {title:"new task 2",id:2,description:"new task added to to do list"}

        const searchInput = 'new todo' 
        const {todoList,createToDo,filterData,filteredToDo} = useTodo()
        
        createToDo(todo1)
        createToDo(todo2)


        filterData(searchInput)

        const expectedResult = todoList.value.filter(todo=>todo.title.includes(searchInput))


        expect(filteredToDo.value.title).toBe(expectedResult.title)
    })


    it("Should find proper data from list of todo with provided id",()=>{

        const todo1 = {title:"new todo",id:1,description:"new to do list has been added to list of todo"}
        const todo2 = {title:"new task 2",id:2,description:"new task added to to do list"}

        // search value
        const todoId = 1 
        
        // Composable
        const {findData,createToDo} = useTodo()
        
        // Add todo 
        createToDo(todo1)
        createToDo(todo2)

        const result = findData(todoId)

        const arrayTodo = [todo1,todo2]
        const expectedResult = arrayTodo.find(todo=>todo.id === todoId)


        expect(result.id).toBe(expectedResult.id)

    })


    it("Should throw error when not appropriate type is provided",()=>{

        const todo1 = {title:"new todo",id:1,description:"new to do list has been added to list of todo"}
        const todo2 = {title:"new task 2",id:2,description:"new task added to to do list"}
        
        const {findData,createToDo} = useTodo()
       
        // search with invalid input value
        const todoId = 'invalid'

        // Add todo 
        createToDo(todo1)
        createToDo(todo2)

        const resultFn = function(){
            findData(todoId)
        }


        expect(resultFn).toThrow()

    })

    it("Should have proper data when for is submitted",async()=>{
    
        const wrapper = mount(Home)
        
        
        const input = {title:"new task",description:"new task description",id:1}

        const form = wrapper.get('[data-test="form"]')

        const {todoList,createToDo} = useTodo()


        await form.trigger("submit")

        createToDo(input)

        const listComponentWrapper = mount(TodoList,{
            props:{
                todoList:todoList.value
            }
        })


        expect(listComponentWrapper.get('[data-test="list"]:last-child').text()).toContain('new task description')
        expect(listComponentWrapper.get('[data-test="list"]:first-child').text()).toContain(input.title)
    
    
    
})

it("Should return a valid value when search", ()=>{

    // Custom input 
    const todoLists = [{title:"vue",description:'Learn all about vue '}]

    // Search input value
    const searchValue = 'v'

    const wrapper = mount(Home)
    const component = wrapper.findComponent('[data-test="search"]')    
    const {filterData,computedFilterData,createToDo} = useTodo()

    createToDo(todoLists[0])

    filterData(searchValue)



    const expectedResult = todoLists.filter(todo=>todo.title.includes(searchValue))

    for(const result of expectedResult){

        for(const filtered of computedFilterData.value){

            expect(result.title).toBe(filtered.title)
        }
    }
}) 

it("should filteredData and origin list of Todo have same length when search value is empty",()=>{

    // Custom input 
    const todoLists = [{title:"vue",description:'Learn all about vue '},{title:"react",description:'Learn all about react '}]

    // input with empty value
    const searchValue = ''

    const {computedFilterData,createToDo,filterData} = useTodo()

    for(const data of todoLists){

        createToDo(data)
    }

    filterData(searchValue)

    expect(computedFilterData.value.length).toEqual(todoLists.length)

})


it("Should find the exact todo with provided id of todo",()=>{

     // Custom input 
     const todoLists = [{title:"vue",description:'Learn all about vue ',id:1},{id:2,title:"react",description:'Learn all about react '}]

    const id = 1

    const {createToDo,findData} = useTodo()

    for(const data of todoLists){

        createToDo(data)
    }
    
    const expectedResult = todoLists.find(todo=>todo.id===id)
    const resultFn = findData(id)
    

    expect(expectedResult.id).toEqual(resultFn.id)


    })
    it("Should throw error when the type of id is not valid",()=>{

        // Custom input 
        const todoLists = [{title:"vue",description:'Learn all about vue ',id:1},{id:2,title:"react",description:'Learn all about react '}]
   
       const id = '2'
   
       const {createToDo,findData} = useTodo()
   
       for(const data of todoLists){
   
           createToDo(data)
       }
       
       
       const resultFn = function(){
        findData(id)
       }
       
   
       expect(resultFn).toThrowError(/Type/)
   
   
       })

})

