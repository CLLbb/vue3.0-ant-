<template>
  <div class="account">
      <div class="form-wrap">
          <a-form>
            <a-form-item :wrapper-col="formItemLayout.wrapperCol">
                <label class="color-white">用户名</label>
                <a-input placeholder="请输入手机号"/>
            </a-form-item>
            <a-form-item :wrapper-col="formItemLayout.wrapperCol">
                <label class="color-white">密码</label>
                <a-input placeholder="请输入密码"/>
            </a-form-item>
            
            <a-form-item >
                <router-link to='/home'>
                    <a-button type="primary" @click="check" block> 登录</a-button>
                </router-link>
                <a-button type="primary" @click="testbutton" block> 测试</a-button>
            </a-form-item>
            <div class="color-white text-center font-12">
                <a href="#" class="color-white font-12">忘记密码</a> |
                <router-link to='/register' class="color-white font-12">注册</router-link>
            </div>
        </a-form>
      </div>
  </div>
</template>

<script>
import{ reactive,getCurrentInstance} from 'vue'
import { getCode } from '@/api/account'
export default {
    setup(){
        const {proxy} = getCurrentInstance()
        const submit = ()=>{
            proxy.$axios.post('getSms')
        }
        const formItemLayout = reactive({
        labelCol: { span: 24},
        wrapperCol: { span:24 },
        }) ;

        const testbutton= () =>{
            getCode()
        }
        return{
            formItemLayout,
            submit,
            testbutton
            }
    }
};
</script>
<style scoped>
    @import 'login.scss'
</style>