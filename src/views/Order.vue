<template>
    <div>
        <!-- 表格部分 -->
        <el-table :data="commodityList,index" v-loading="loading" element-loading-text="数据加载中...">
            <el-table-column prop="oid" label="序号"></el-table-column>
            <el-table-column prop="orderno" label="订单编号">
            </el-table-column>
            <el-table-column prop="oprice" label="订单价格(元)" align="center" :formatter="priceFormatter">
            </el-table-column>
            <el-table-column prop="orderinfo" label="商品信息" align="center">
            </el-table-column>
            <el-table-column prop="ctime" label="下单时间" align="center">
            </el-table-column>
            <el-table-column prop="oaddress" label="地址信息" align="center">
            </el-table-column>
            <!-- 操作部分 -->
            <el-table-column label="操作" align="center">
                <el-button size="mini" type="danger" text="删除" @click="detaleInfo(commodityList[0].oid)">
                </el-button>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            commodityList: [], // 商品列表

            commodity: {
                // 查询条件
                cname: '',
                cjude: ''
            },
            loading: true // 正在加载
        };
    },
    //钩子函数
    created() {
        this.loadCommodityList();
    },
    methods: {
        loadCommodityList() {
            this.$axios({
                url: 'http://localhost:8066/indent/getAll',
                method: 'post',
                data: {
                    uid: this.$store.state.User.uid
                }
            })
                .then(response => {
                    console.log(response);
                    this.commodityList = response.data.data;
                    this.$message({
                        message: "数据加载完成",
                        type: "success"
                    });
                    this.loading = false; // 关闭加载提示
                })
                .catch(error => {
                    console.log(error);
                    this.$message.error("对不起，数据存在异常");
                });
        },
        detaleInfo(get_cid) {
            alert(get_cid)
            // this.$axios({
            //     url: 'http://localhost:8066/order/deleteInfo',
            //     method: 'delete',
            //     data: {
            //         cid: get_cid
            //     }
            // })
            //     .then(response => {
            //         console.log(response);
            //         this.loadCommodityList();
            //         this.$message({
            //             message: "数据加载完成",
            //             type: "success"
            //         });
            //         this.loading = false; // 关闭加载提示
            //     })
            //     .catch(error => {
            //         console.log(error);
            //         this.$message.error("对不起，数据存在异常");
            //     });
        },
        //价格前面添加¥ 方法
        priceFormatter(row, column, value, index) {
            return `¥${value}`;
        }
    }
};
</script>
<style scoped>
.actions {
    display: flex;
    align-items: flex-end;
}
</style>
