<template>
    <div id="Index">
        <el-card class="box-card">
            <div class="ht-form">
                <el-row class="kind">
                    <!--          登录按钮-->
                    <el-col :span=4 :offset=8>
                        <router-link to="/login">
                            <el-button size="small">
                                <el-link type="primary" style="font-size: 16px" @click="loginAdd"
                                    :style="{ color: activeLogin }">
                                    登录
                                </el-link>
                            </el-button>
                        </router-link>
                    </el-col>
                    <!--          注册按钮-->
                    <el-col :span=4 :offset=1>
                        <router-link to="/register">
                            <el-button size="small">
                                <el-link type="primary" style="font-size: 16px" @click="registerAdd"
                                    :style="{ color: activeRegister }">
                                    注册
                                </el-link>
                            </el-button>
                        </router-link>
                    </el-col>
                </el-row>
            </div>



            <router-view />
        </el-card>
    </div>
</template>
  
<script>
import Login from '../components/Login'

export default {
    name: "Index",
    components: {
        Login
    },
    data() {
        return {
            activeLogin: '',
            activeRegister: ''
        }
    },
    methods: {
        loginAdd() {
            this.activeRegister = ''
            this.activeLogin = 'black'
        },
        registerAdd() {
            this.activeLogin = ''
            this.activeRegister = 'black'
        }
    }
}
</script>
  
<style scoped>
.box-card {
    width: 500px;
    margin: 100px auto;

}

.ht-form {
    margin-top: 30px;
}

.activeCss {
    color: black;
}

.kind {
    margin-bottom: 20px;
}


.ht-hr {
    margin-bottom: 40px;
}
</style>