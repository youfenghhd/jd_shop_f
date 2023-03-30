<template>
    <div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" prop="user">
                <el-input type="text" v-model="ruleForm.user" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>



            <el-form-item>
                <el-row>
                    <el-col :span=12>
                        <el-button @click="submitForm()" round>提交</el-button>
                    </el-col>
                    <el-col :span=12>
                        <el-button @click="resetForm()" round>重置</el-button>
                    </el-col>
                </el-row>


            </el-form-item>
        </el-form>
    </div>
</template>
  
<script>
import axios from 'axios';
export default {
    name: "Login",
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                callback();
            }
        };
        var validateUser = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入账号'));
            } else {
                callback();
            }
        };
        return {
            ruleForm: {
                user: '',
                pass: '',

            },
            rules: {
                user: [
                    { validator: validateUser, trigger: 'blur' }
                ],
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
            }
        };
    },
    methods: {
        resetForm() {
            this.ruleForm.user = '',
                this.ruleForm.pass = ''
        },
        submitForm() {
            //异步请求
            this.$axios({
                url: 'http://localhost:8066/user/findUacc',
                method: 'post',
                data: {
                    uacc: this.ruleForm.user,
                    upwd: this.ruleForm.pass
                }
            }).then(response => {
                console.log(response)
                if (response.data.data != null) {
                    this.$message.success("登录成功")
                    console.log(response.data.data)
                    this.$store.dispatch("setUserAysnc",response.data.data);
                    this.$router.replace("/Admin")
                } else {
                    this.$message.error("登陆失败")
                    this.$router.replace("/")
                }
            }).catch(error => {
                console.log(error);
            });
        }
    }
}
</script>
  
<style scoped>
.demo-ruleForm {
    position: relative;
    left: -18px;
}
</style>