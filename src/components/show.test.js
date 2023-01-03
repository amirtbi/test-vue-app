import { mount } from "@vue/test-utils";

import {it,expect} from 'vitest'

import Show from './Show.vue'



it("Should render greeting when show is true",async ()=>{

    const wrapper = mount(Show)
    
    await wrapper.setProps({show:false})

    expect(wrapper.html()).not.toContain('Hello')
})