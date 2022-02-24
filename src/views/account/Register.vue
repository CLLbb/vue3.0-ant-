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
                    <a-input v-model:value="ruleFormp.password" type="password" autocomplete="off"/>
                </a-form-item>

                <a-form-item :wrapper-col="laout.wrapperCol" has-feedback  name="passwords">
                    <label >确认密码</label>
                    <a-input v-model:value="ruleFormp.passwords" />
                </a-form-item>

                <a-form-item :wrapper-col="laout.wrapperCol" has-feedback  name="passwords">
                    <label >验证码</label>
                    <a-row :gutter='10'>
                        <a-col :span="14">
                            <a-input v-model:value="ruleFormp.passwords" />
                        </a-col>
                        <a-col :span="10">
                            <a-button type="primary" block>获取验证码</a-button>
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
import checkPhone from '@/utils/verification'
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

            const formItemLayout = reactive({
            laout:{
                labelCol: { span: 24},
                wrapperCol: { span:24 },
            },

            ruleFormp: {
                userPhone: '',
                password: '',
                passwords: '',
            },
            rules: {
                userPhone: [{required: true,validator: validateName, trigger: 'change' },],
                password: [{required: true, trigger: 'change' }],
                passwords: [{required: true, trigger: 'change' }],
            },
        });


        const handleFinish = () => {
            console.log('参数2',formItemLayout.ruleFormp.userPhone)
            console.log('参数2',formItemLayout.ruleFormp.password)
            console.log('参数2',formItemLayout.ruleFormp.passwords)
        };

        // const data = toRefs(formItemLayout);
        return{
            ...toRefs(formItemLayout),
            handleFinish
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