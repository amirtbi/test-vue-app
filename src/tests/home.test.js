import { mount } from "@vue/test-utils";

import {it,expect} from 'vitest'

import Home from '../pages/Home.vue'

it("a todo is rendered",()=>{

    // Arrange 
    const wrapper = mount(Home)
    
    const todoElement = wrapper.get('[data-test="todo"]')


    expect(todoElement.text()).toBe('Learn vue.js 3')
})


it("should create a new todo and add it to list of todos", async ()=>{

    // Arrange 
    const wrapper = mount(Home)

    await expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)
    

    // Update wrapper content and Set a new value in input
    await wrapper.get('[data-test="new-todo"]').setValue('New todo')
    await wrapper.get('[data-test="form"]').trigger('submit')
    // // Trigger submit button
    // wrapper.get('[data-test="form"]').trigger("submit")

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)



})