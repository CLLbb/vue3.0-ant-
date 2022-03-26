<template>
    <a-modal v-model:visible="visible" :title="title">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </a-modal>
</template>
<script>
import {ref} from '@vue/reactivity'
export default {
    props:{
    title:{
        type:String,
        require:true,
        default:''
        }
    },
    setup(){
        const visible = ref(true)
        return{
            visible
        }
    }
}
</script>