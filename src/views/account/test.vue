<template>
  <div class="account">
      <div class="form-wrap">
          <a-form ref='ruleForm' v-bind:model="ruleFormp" :rules="rules" @finish="handleFinish" v-bind="layout">
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

                <a-form-item>
                <a-button type="primary" html-type="submit" block>
                    登录
                </a-button>
        </a-form-item>
            </a-form>
      </div>
  </div>
</template>

<script>
import{ reactive,toRefs} from 'vue'
export default {
    setup(){
          // 验证
            const validateName = (rule, value, callback) => {
               if (!value) {
                    callback(new Error('请输入用户名'));
                } else {
                    const unm = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
                    const ver = unm.test(value)
                    if (!ver) {
                        callback(new Error('请输入正确的手机号'));
                    }
                    callback();
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
            },
            rules: {
                userPhone: [{validator: validateName, trigger: 'change' },],
                // checkPass: [{ validator: validateName, trigger: 'change' }],
                // age: [{ validator: validateName, trigger: 'change' }],
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