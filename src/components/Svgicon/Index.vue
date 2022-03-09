<template>
    <svg class="svg-class" :class='className'>
        <use :href="'#icon-' + iconName "></use>
    </svg>
</template>
<script>
export default{
    name:"SvgIcon",
    props:{
        iconName:{
            type:String,
            default:""
        },
        className:{
            type:String,
            default:""
        }
    },
    setup() {
        
    },
}
</script>
<style scoped>
.svg-class{
    width: 20px;
    height: 20px;
    fill:currentColor ;/* 设置了fill属性才可给svg设置颜色 */
    margin-bottom: -5px;
}
</style>
