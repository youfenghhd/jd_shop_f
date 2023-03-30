<template>
	<div>
		<el-container>
			<el-header>
				<el-row style="padding-top: 10px; text-align: left;">
					<div class="demo-type" style="text-align: center;">
						<div style="float: right;margin-right: 10px; text-align: right;">
							<span>您好,管理员</span>
							<el-button type="text" style="margin-left: 30px;">
								<router-link to="/">退出登录</router-link>
							</el-button>
						</div>
						<h1>诚毅商城后台管理</h1>

					</div>
				</el-row>
			</el-header>
			<!--内容部分-->
			<el-container>
				<!--左菜单栏-->
				<el-aside width="150px">
					<el-row class="tac">
						<el-col :span="24">
							<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen"
								@close="handleClose" background-color="#545c64" text-color="#fff"
								active-text-color="#ffd04b" router>
								<el-menu-item index="/Home">
									<i class="el-icon-menu"></i>
									<span slot="title">首页</span>
								</el-menu-item>

								<el-submenu index="2">
									<template slot="title">
										<i class="el-icon-location"></i>
										<span>管理</span>
									</template>

									<el-menu-item index="/UserList">用户管理</el-menu-item>
									<el-menu-item index="CommodityList">商品管理</el-menu-item>

								</el-submenu>
							</el-menu>
						</el-col>
					</el-row>
				</el-aside>

				<!--显示栏-->
				<el-main>
					<router-view></router-view>
				</el-main>


			</el-container>

		</el-container>
	</div>
</template>
<script>
export default {
	data() {
		return {
			message: "Hello home"
		};
	},
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		}
	}
};
</script>
<style scoped>
.el-container {
	height: 1000px;
}

.el-header,
.el-footer {
	background-color: #BDBDBD;
	color: #333;
	text-align: center;
	line-height: 30px;
}

.el-aside {
	background-color: #545c64;
	color: #333;
	text-align: center;
	line-height: 200px;
}

.el-main {
	background-color: #e9eef3;
	color: #333;
	text-align: center;
	line-height: 160px;
}

/* body>.el-container {
		margin-bottom: 40px;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	} */

a {
	text-decoration: none;
	color: #ffff;
}
</style>
