<template>
  <div>
    <el-container>
      <el-main id="box">
        <!--        路由选软-->
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>
<script>

import Comprehensive from './views/Comprehensive.vue'

export default {
  name: "App",
  components: {
    Comprehensive
  }
}
</script>

<style>
* {
  list-style: none;
  padding: 0;
  margin: 0;
}

#box {
  text-align: center;
  margin: 0;
  padding: 0;
}

.ht-header {
  background-color: rgba(235, 235, 235, 1);
}

.beian {
  position: absolute;
  bottom: 20px;
  left: 45%;
  text-decoration: none;
  color: rgba(180, 180, 180, 1);
}
</style>
