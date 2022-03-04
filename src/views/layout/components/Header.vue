<template>
    <div class="header">
        <div class="header_user">
            <a-dropdown>
                <a class="ant-dropdown-link" @click.prevent>
                <img src="@/assets/images/face.png" alt="">
                <DownOutlined />
                </a>
                <template #overlay>
                <a-menu>
                    <a-menu-item key="0"> 13256984235 </a-menu-item>
                    <a-menu-divider />
                    <a-menu-item key="1">
                         <span 
                            v-for="item in lang" 
                            :key="lang.value" 
                            @click="togglelang(item.value)"
                           :class="{'current':lang_current == item.value}"
                         >
                            {{item.label}}
                         </span>
                    </a-menu-item>
                    <a-menu-divider />
                    <a-menu-item key="3">{{ $t("header_menu.logout") }}</a-menu-item>
                </a-menu>
                </template>
            </a-dropdown>
        </div>
    </div>
</template>
<script>
import { useI18n } from 'vue-i18n'
import { reactive,toRefs} from 'vue'
export default{
    setup(){
        const { locale } = useI18n( {useScope : 'global'});

        const data = reactive({
            lang:[
                {label:'中文 | ',value:"ch"},
                {label:'EN',value:'en'}
            ],
            lang_current:'ch'
        })

        const togglelang = (lang)=>{
            locale.value=lang;
            data.lang_current = lang
        }
        return{
            ...toRefs(data),
            togglelang
        }
    }
}
</script>
<style scoped>
    .header{
        height: 64px;
        padding: 0 20px;
    }
    .header_user{
        text-align: right;
    }
    .current{
        color: #ea1c5b;
    }
</style>
