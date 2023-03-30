<template>
  <div>
    <h1 style="margin-top: 30px;">用户支付界面</h1>
    <div style="margin-top: 30px;margin-left: 750px;">
      <el-form label-width="80px" :model="aliPay">
        <el-form-item label="订单id" style="width: 350px;">
          <el-input v-model="aliPay.traceNo"></el-input>
        </el-form-item>
        <el-form-item label="订单价格" style="width: 350px;">
          <el-input v-model="aliPay.totalAmount"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <el-button>
      <a :href="payURL">确定支付</a>
    </el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 提交的流水和金额
      aliPay: {
        traceNo: '1001',
        totalAmount: this.$store.state.Balance
      }
    }
  },
  // 计算属性
  computed: {
    payURL: function () {
      return 'http://localhost:8066/alipay/pay?subject=收购阿里&traceNo=' +
        this.aliPay.traceNo + '&totalAmount=' + this.aliPay.totalAmount
    }
  }
}
</script>
