<template>
    <div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="注册账号" prop="user">
                <el-input type="text" v-model="ruleForm.user" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="用户名" prop="user">
                <el-input type="text" v-model="ruleForm.uname" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="注册密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
                <el-input type="text" v-model="ruleForm.sex" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
                <el-input type="text" v-model="ruleForm.age" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item>
                <el-row>
                    <el-col :span=12>
                        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    </el-col>
                    <el-col :span=12>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-col>
                </el-row>
            </el-form-item>
        </el-form>
    </div>
</template>
  
<script>
import axios from 'axios';
import LoginVue from './Login.vue';
export default {
    name: "Register",
    data() {
        var validateCheckPass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入确认密码'));
            } else {
                callback();
            }

        };
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
                checkPass: ''
            },
            rules: {
                user: [
                    { validator: validateUser, trigger: 'blur' }
                ],
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validateCheckPass, trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        resetForm() {
            this.ruleForm.user = '',
                this.ruleForm.pass = '',
                this.ruleForm.checkPass = ''
        },
        submitForm() {
            axios({
                method: 'post',
                url: 'http://localhost:8066/user/save',
                data: {
                    uname: this.ruleForm.user,
                    upwd: this.ruleForm.pass,
                    uacc: this.ruleForm.user,
                    sex: this.ruleForm.sex,
                    age: this.ruleForm.age,
                    utype: "启用",
                    ubalance: 100
                }
            })
                .then(res => {
                    console.log(res.data);
                    this.$message.success("注册成功")
                    this.$router.replace("/login")
                })
                .catch(error => {
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