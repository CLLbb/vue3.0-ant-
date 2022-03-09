<template>
    <a-sub-menu :key="menu.path">
        <template #title>
            <span class="anticon">
                 <svg-icon :iconName='menu.meta && menu.meta.icon' :className="aside-svg"></svg-icon>
            </span>
            <span> {{ menu.meta && menu.meta.title }}</span>
        </template>
        <template v-for='item in menu.children' >
            <a-menu-item v-if='!item.children' :key='item.path'>
                <router-link :to="item.path"> {{ item.meta && item.meta.title }} </router-link>
            </a-menu-item>
             <Menu v-else :menu='item' :key="item.path"/>
        </template>
    </a-sub-menu>
</template>
<script>
// import SvgIcon from '@/components/Svgicon/Index.vue' 

export default{
    name:'menu',
//     components: {
//     SvgIcon 
//   },
    props:{
        menu:{
            type:Object,
            default:() => ({})
        }
    },
    setup() {
    },
}
</script>
<style scoped>

</style>
