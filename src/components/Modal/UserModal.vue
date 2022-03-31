<template>
    <a-modal v-model:visible="visible" :title=" id? '编辑用户':'新增用户'" @cancel='close' :confirm-loading="confirmLoading" @ok="handleOk">
        <a-form ref="formRef" :model="formState" :label-col="colform.labelCol" :wrapper-col="colform.wrapperCol">
            <a-form-item label="用户名：" name='username'>
                <a-input v-model:value="formState.username" />
            </a-form-item>

            <a-form-item label="真实名称：" name='truename'>
                <a-input v-model:value="formState.truename" />
            </a-form-item>

            <a-form-item label="手机号：" name='telephone'>
                <a-input v-model:value="formState.telephone" />
            </a-form-item>

            <a-form-item label="身份证：" name='IDcard'>
                <a-input v-model:value="formState.IDcard" />
            </a-form-item>

            <a-form-item label="角色类型：" name='role'>
                <a-radio-group v-model:value="formState.role" :options="roleOptions" />
            </a-form-item>

            <a-form-item label="禁启用：" name='status'>
                <a-radio-group v-model:value="formState.status" :options="statusOptions" />
            </a-form-item>
        </a-form>
    </a-modal>
</template>
<script>
import { reactive, ref, watch } from 'vue';
export default {
    props:{
        title:{
            type:String,
            require:true,
            default:''
            },
        id:{
            type:String,
            default:''
        }
    },
    setup(props,context){
        const visible = ref(true);
        const formRef = ref();
        const confirmLoading = ref(false);
        const formState = reactive({
            username: '',
            truename:'',
            telephone:'',
            IDcard:'',
            role:'product',
            status:'1'
        });
        const colform = reactive({
            labelCol: {span:4},
            wrapperCol:{span:20}
            })

        const roleOptions = [{
            label: '超级管理员',
            value: 'admin',
            }, {
            label: '产品管理员',
            value: 'product',
            }, {
            label: '用户管理员',
            value: 'usercon',
            }];

        const statusOptions =[{
            label: '禁用',
            value: '0',
            }, {
            label: '启用',
            value: '1',
            }];

        watch( () => props.id,(newValue,oldValue) => {
            console.log('idzhi',newValue)
        })

        const close = () =>{
            Reset()
        }

        const Reset = () => {
            console.log(3333,formRef.value)
            formRef.value.resetFields();
            context.emit("update:id", "");          
        }

        const handleOk = () => {
            confirmLoading.value = true;
            visible.value = false;
            };
        return{
            visible,
            formState,
            colform,
            roleOptions,
            statusOptions,
            formRef,
            confirmLoading,
            close,
            Reset,
            handleOk
        }
    }
}
</script>