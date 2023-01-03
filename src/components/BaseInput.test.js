import { mount } from "@vue/test-utils";

import {ite,describe,expect, it} from 'vitest'

import Home from '../pages/Home.vue'
import BaseInput from './BaseInput.vue'


describe("BaseInput component",()=>{

    it("Model value should be updated",async ()=>{
        
        const wrapper = mount(BaseInput,{
            props:{
                modelValue:'initialText',
                'onUpdate:modelValue':(e)=>wrapper.setProps({modelValue:e})
            }
        })


        await wrapper.find('input').setValue("test")
        expect(wrapper.props('modelValue')).toBe('test')
    })

    it("Should update list of Todo when button is clicked",async()=>{

        const wrapper = mount(Home,{})
        const form = wrapper.find("[data-test='form']")

       

        await form.trigger("submit.prevent")


        expect(wrapper.get('[data-test="text"]').text()).toBe('added')



       })

       it("Should have same value as provided ",async()=>{


        const wrapper = mount(Home)

        const title = 'Vue.js'

        await wrapper.find('[data-test="title"]').setValue(title)
       
        expect(wrapper.find('input[data-test="title"]').element.value).toBe(title)
       
       
       })
})