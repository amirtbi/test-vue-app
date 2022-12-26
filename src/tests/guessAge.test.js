import { mount } from "@vue/test-utils";
import GuessAge from '../components/GuessAge.vue'
import {expect,it} from 'vitest'

it("should mount the component",async ()=>{

    const component = GuessAge


    expect(component).toBeTruthy()
})


it("should include the provided prop",async ()=>{

    const component = GuessAge

    const propValue = 'Guess your age'

    const wrapper = mount(GuessAge,{

        props:{
            title:propValue
        }


    });

    expect(wrapper.text()).toContain(propValue)


})
