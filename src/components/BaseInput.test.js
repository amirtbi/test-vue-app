import { mount } from "@vue/test-utils";

import {ite,describe,expect, it} from 'vitest'


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
})