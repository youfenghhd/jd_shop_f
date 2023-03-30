<template>
	<div>
		<!-- 表单部分 -->
		<el-form class="actions" :inline="true" :model="commodity">
			<el-form-item class="input-title" label="商品名称">

				<el-input v-model="commodity.cname" placeholder="商品名称" />

			</el-form-item>
			<el-form-item label="状态">
				<el-select v-model="commodity.cjude" placeholder="商品状态">
					<el-option label="全部" value></el-option>
					<el-option label="在售" value="上架"></el-option>
					<el-option label="下架" value="下架"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item>
				<el-button @click="filterQuery">查询</el-button>
			</el-form-item>
			<el-form-item class="btn-add">
				<el-button type="primary" icon="el-icon-plus" @click="addCommodity">新增
					商品</el-button>
			</el-form-item>
		</el-form>
		<!-- 表格部分 -->
		<el-table :data="commodityList" v-loading="loading" element-loading-text="数据加载中...">
			<el-table-column prop="cid" label="商品ID" width="100"></el-table-column>
			<el-table-column prop="cname" label="商品名称" width="150">
			</el-table-column>
			<el-table-column prop="cprice" label="价格" align="center" width="100" :formatter="priceFormatter">
			</el-table-column>
			<el-table-column prop="cinfo" label="商品信息" align="center" width="200">
			</el-table-column>
			<el-table-column prop="cnumber" label="库存" align="center" width="100">
			</el-table-column>
			<!-- 状态展示 -->
			<el-table-column prop="cjude" label="状态" align="center" width="120">
				<template slot-scope="scope">
					<span v-if="scope.row.cjude == '上架'">在售</span>
					<span v-if="scope.row.cjude == '下架'">下架</span>
				</template>
			</el-table-column>
			<!-- 操作部分 -->
			<el-table-column label="操作" align="center">
				<template slot-scope="scope">
					<!-- 状态按钮 -->
					<el-button size="mini" type="danger" v-text="scope.row.cjude == '上架' ? '下架':'发布'"
						@click="updateStatus(scope.$index, scope.row)">
					</el-button>
					<!-- 营销信息按钮 -->
					<el-button size="mini" type="primary" @click="updateCommodity(scope.row)">修改商品信息</el-button>
				</template>
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
			// 获取商品列表
			loadCommodityList() {
				this.$axios({
						url: 'http://localhost:8066/commodity/findCommodity',
						method: 'get',

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
			// 根据条件查询商品
			filterQuery() {
				this.$axios({
						url: 'http://localhost:8066/commodity/findCname',
						method: 'post',
						data: {
							cname: this.$data.commodity.cname,
							cjude: this.$data.commodity.cjude,
						}

					})
					.then(response => {
						//console.log(response);
						this.commodityList = response.data.data;
						this.loading = false; // 关闭加载提示
					})
					.catch(error => {
						console.log(error);
						this.$message.error("对不起，数据存在异常");
					});
			},
			// 修改商品状态
			updateStatus(index, row) {
				console.log(index, row);
				console.log(row.cid);
				this.$axios({
						url: 'http://localhost:8066/commodity/changeCjude',
						method: 'post',
						data: {
							cid: row.cid,
							cjude: row.cjude,
						}
					})
					.then(response => {
						console.log(response);

						this.$message({
							message: "修改成功",
							type: "success"
						});
						this.loading = false; // 关闭加载提示
					})
					.catch(error => {
						console.log(error);
						this.$message.error("修改失败");
					});
				location.reload();
				this.loading = false;
			},
			// 增加商品
			addCommodity() {
				this.$router.push("/AddCommodity")
			},
			// 修改商品信息
			updateCommodity(rowData) {
				// 路由跳转到修改商品页，同时传递参数
				this.$router.push({
					name: "UpdateCommodity", // 名称为配置路由时候的那个name属性
					params: {
						rowData: rowData
					}
				});
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
