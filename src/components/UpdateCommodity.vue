<template>
	<div>
		<section class="commodity-item">
			<!-- 头部 -->
			<div class="header">
				<!-- 返回上一页 -->
				<el-page-header @back="() => this.$router.back()" />
			</div>
			<!-- 表单开始 -->
			<el-form ref="form" :model="commodity" label-width="120px">
				<el-card shadow="never">
					<header slot="header">修改商品信息</header>
					<el-form-item label="商品ID" prop="cname" disabled>
						<el-input v-model="commodity.id" type="text" maxlength="50" show-word-limit disabled />
					</el-form-item>
					<el-form-item label="商品名称" prop="cname">
						<el-input v-model="commodity.cname" type="text" maxlength="50" show-word-limit />
					</el-form-item>
					<el-form-item label="价格" prop="price">
						<el-input v-model="commodity.price" type="text" maxlength="100" show-word-limit />
					</el-form-item>
					<el-form-item label="库存" prop="repertory">
						<el-input v-model="commodity.repertory" type="text" maxlength="50" show-word-limit />
					</el-form-item>
				</el-card>
				<div class="actions">
					<el-button type="primary" @click="handleUpdate">确认修改</el-button>
				</div>
			</el-form>
			<!-- 表单结束 -->
		</section>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				commodity: {
					id: "",
					cname: "",
					price: "",
					repertory: ""
				}
			};
		},
		// 钩子函数，获取传递过来的参数
		created() {
			console.log(this.$route.params.rowData);
			this.commodity.id = this.$route.params.rowData.cid;
			this.commodity.cname = this.$route.params.rowData.cname;
			this.commodity.price = this.$route.params.rowData.cprice;
			this.commodity.repertory = this.$route.params.rowData.cnumber;
		},
		methods: {
			backToCommodity() {
				this.$router.back();
			},
			handleUpdate() {
				this.$axios({
						url: 'http://localhost:8066/commodity/update',
						method: 'put',
						data: {
							cid: this.commodity.id,
							cname: this.commodity.cname,
							cprice: this.commodity.price,
							cnumber: this.commodity.repertory
						}
					})
					.then(response => {
						
						console.log(response);
				
						this.$message({
							message: "添加成功",
							type: "success"
						});
						
						this.loading = false; // 关闭加载提示
						
					})
					.catch(error => {
						console.log(error);
						this.$message.error("添加失败");
					});
					this.$router.push("/CommodityList"); // 返回到商品页
					location.reload();
					this.loading=false;
			}
		}
	};
</script>
