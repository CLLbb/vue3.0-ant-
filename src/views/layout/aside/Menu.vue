<template>
    <a-sub-menu :key="menu.path">
        <template #title>
            <span>
                <i class='icon icon-aside-home' :class="menu.meta.icon"></i>
                {{ menu.meta && menu.meta.title }}
            </span>
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

export default({
    name:'menu',
    props:{
        menu:{
            type:Object,
            default:() => ({})
        }
    },
    setup() {
    },
})
</script>
<style scoped>

</style>
