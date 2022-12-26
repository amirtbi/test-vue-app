import {ref} from 'vue'

export const useSummation = ()=>{

    const summation= ref(0)

    
    const Sum = (numbers)=>{
        for(const number of numbers){
            summation.value+=number
        }
    }


    return {summation,Sum}

}