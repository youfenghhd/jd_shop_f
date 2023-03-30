<template>
	<div>
		<section class="commodity-item">
			<!-- 头部 -->
			<div class="header">
				<!-- 返回上一页 -->
				<el-page-header @back="() => this.$router.back()" />
			</div>
			<!-- 表单开始 -->
			<el-form ref="form" :model="commodity" :rules="rules" label-width="120px">
				<el-card shadow="never" v-loading="loading" element-loading-text="数据加载
中...">
					<header slot="header">新增商品信息</header>
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
					<el-button type="primary" @click="handleSave">保存</el-button>
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
					cname: "",
					price: "",
					repertory: ""
				}
			};
		},
		methods: {
			// 返回商品页
			backToCommodity() {
				this.$router.back();
			},
			// 保存商品
			handleSave() {
				this.$axios({
						url: 'http://localhost:8066/commodity/save',
						method: 'post',
						data: {
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
