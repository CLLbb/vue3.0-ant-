<template>
  <div class="account">
      <div class="form-wrap">
          <a-form ref='ruleForm' v-bind:model="ruleFormp" :rules="rules" @finish="handleFinish" v-bind="layout">
               <div class="text-right"> 
                    <router-link to='/' class="text-center font-12" >登录 ?</router-link>
                </div>
                <a-form-item :wrapper-col="laout.wrapperCol" has-feedback  name="userPhone">
                    <label >用户名</label>
                    <a-input v-model:value="ruleFormp.userPhone" type="text" autocomplete="off"/>
                </a-form-item>

                <a-form-item :wrapper-col="laout.wrapperCol" has-feedback  name="password">
                    <label >密码</label>
                    <a-input v-model:value="ruleFormp.password" type="text" autocomplete="off"/>
                </a-form-item>

                <a-form-item :wrapper-col="laout.wrapperCol" has-feedback name="passwords">
                    <label >确认密码</label>
                    <a-input type="text" v-model:value="ruleFormp.passwords" />
                </a-form-item>

                <a-form-item :wrapper-col="laout.wrapperCol" has-feedback>
                    <label >验证码</label>
                    <a-row :gutter='10'>
                        <a-col :span="14">
                            <a-input v-model:value="ruleFormp.code" />
                        </a-col>
                        <a-col :span="10">
                            <a-button 
                            type="primary" 
                            :loading="loading"
                            :disabled="disabled"
                            @click="getcode"
                            block
                            >
                            {{button_text}}
                            </a-button>
                        </a-col>
                    </a-row>
                </a-form-item>

                <a-form-item>
                    <a-button type="primary" html-type="submit" block>
                        注册
                    </a-button>
                </a-form-item>
            </a-form>
      </div>
  </div>
</template>

<script>
import{ reactive,toRefs} from 'vue'
import {checkPhone,checkPassword} from '@/utils/verification'
import { message } from 'ant-design-vue';
export default {
    setup(){
          // 验证手机号
            const validateName = (rule, value, callback) => {
               if (!value) {
                    return Promise.reject('请输入用户名');
                } else {
                    const ver = checkPhone(value)
                    if (!ver) {
                        return Promise.reject('请输入正确的手机号');
                    }
                    return Promise.resolve();
                }
            };

            // 验证密码
            const checkword = (rule, value, callback) => {
               if (!value) {
                    return Promise.reject('请输入密码');
                } else {
                    const ver = checkPassword(value)
                    if (!ver) {
                        return Promise.reject('请输入6-20位密码');
                    }
                    return Promise.resolve();
                }
            };

            // 再次验证密码
            const checkwords = (rule, value, callback) => {
               if (!value) {
                    return Promise.reject('请再次输入密码');
                } else {
                    const ver = checkPassword(value)
                    if (!ver) {
                        return Promise.reject('请输入6-20位密码');
                    } else{
                        if(formItemLayout.ruleFormp.password !== formItemLayout.ruleFormp.passwords){
                            return Promise.reject('两次输入密码不一致');
                        }
                    }
                    return Promise.resolve();
                }
            };

            const formItemLayout = reactive({
            laout:{
                labelCol: { span: 24},
                wrapperCol: { span:24 },
            },

            ruleFormp: {
                userPhone: '',
                password: '',
                passwords: '',
                code:''
            },
            rules: {
                userPhone: [{required: true,validator: validateName, trigger: 'change' }],
                password: [{required: true,validator: checkword, trigger: 'change' }],
                passwords: [{required: true,validator: checkwords, trigger: 'change' }],
                code:[{ required: true, message: 'Please input your username!' }]
            },
        });

        const data=reactive({
            button_text:'发送验证码',
            loading:false,
            disabled:false,
            num:60,
            secint:null
        })

         const getcode = () =>{
             if(!formItemLayout.ruleFormp.userPhone){
                 message.warning('用户名不能为空');
                 return false
             }
                if(data.secint){
                    clearInterval(data.secint)
                }
               data.secint = setInterval(() => {
                   const s = data.num--;
                    data.button_text=`${s}秒`
                    if(data.num == 0){
                        clearInterval(data.secint)
                    }
               }, 1000);
            }

        const handleFinish = () => {
            console.log('参数2',formItemLayout.ruleFormp.userPhone)
        };

        // const data = toRefs(formItemLayout);
        return{
            ...toRefs(formItemLayout),
            ...toRefs(data),
            handleFinish,
            getcode
            }
    }
};
</script>
<style scoped>
    @import 'login.scss';
    .submitbutton{
        margin-top: 20px;
    }
</style>