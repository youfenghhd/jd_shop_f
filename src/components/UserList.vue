<template>
	<div>
		<!--用户数据表-->
		<el-col :span="6">
			<el-input prefix-icon="el-icon-search" placeholder="搜索用户名" v-model="uname1" clearable></el-input>
		</el-col>
		<el-col :span="1">
			<el-button type="primary" @click="findByUserName">查询用户</el-button>
		</el-col>

		<!--用户数据表-->
		<el-table :data="tableData" style="width:100%" v-loading="loading" element-loading-text="数据加载中...">
			<el-table-column label="ID" width="130" prop="uid">

			</el-table-column>

			<el-table-column label="姓名" width="130" prop="uname">

			</el-table-column>

			<el-table-column label="账号" width="130" prop="uacc">

			</el-table-column>

			<el-table-column label="密码" width="130" prop="upwd">

			</el-table-column>

			<el-table-column label="性别" width="130" prop="sex">

			</el-table-column>

			<el-table-column label="年龄" width="130" prop="age">

			</el-table-column>
			
			<el-table-column label="状态" width="130" prop="utype">
			
			</el-table-column>

			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">重置密码</el-button>
					<el-button size="mini" type="danger" v-text="scope.row.utype == '启用' ? '禁用':'启用'" @click="changeUtype(scope.$index, scope.row)">
						
					</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				loading: true, //是否弹出加载提示
				tableData: [], //定义集合,保存从后台获取的参数
				uname1: ''
			};
		},
		//钩子函数,在DOM页面生成之前执行
		created() {
			//在页面生成之前, 调用loadUserList
			this.loadUserList();
		},

		methods: {
			//重置密码
			handleEdit(index, row) {
				console.log(row.uid);
				this.$axios({
						url: 'http://localhost:8066/user/updateUser',
						method: 'post',
						data: {
							uid: row.uid,

						}
					})
					.then(response => {
						console.log(response);

						this.$message({
							message: "重置成功",
							type: "success"
						});
						this.loading = false; // 关闭加载提示
					})
					.catch(error => {
						console.log(error);
						this.$message.error("修改失败");
					});
					location.reload();
					this.loading=false;
			},
			//更改状态
			changeUtype(index, row) {
				console.log(index, row);
				console.log(row.uid);
				this.$axios({
						url: 'http://localhost:8066/user/changeUtype',
						method: 'post',
						data: {
							uid: row.uid,
							utype:row.utype,
				
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
					this.loading=false;
			},

			// 获取用户列表
			loadUserList() {
				this.$axios({
						url: 'http://localhost:8066/user/findAll',
						method: 'get',
					})
					.then(response => {
						console.log(response);
						this.tableData = response.data.data;
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
			// 用户查询
			findByUserName() {
				this.$axios({
						url: 'http://localhost:8066/user/findUname',
						method: 'post',
						data: {
							uname: this.$data.uname1,
						}

					})
					.then(response => {
						this.tableData = response.data.data;
						this.loading = false;
					})
					.catch(error => {
						this.$message.error("查询，发生异常！");
					});
			}
		}
	}
</script>
