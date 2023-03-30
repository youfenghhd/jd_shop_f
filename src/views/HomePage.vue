<template>
	<!-- 总div 规定字体大小 -->
	<div style="font-size: 14px;">
		<!-- 顶部导航栏 -->
		<div style="display: flex;height: 40px;padding: 0 400px;background-color: #f5f5f5;">
			<div class="top-title" style="padding-right: 20px;line-height: 40px;color: #666;">嗨，<span
					style="color: #b31e22;">{{ this.$store.state.User.uname }}先生!!!</span></div>
			<div class="top-title" style="padding-right: 20px;line-height: 40px;color: #666;margin-left: 20px;">网店代销
			</div>
			<div class="top-title" style="padding-right: 20px;line-height: 40px;color: #666;margin-left: 20px;">帮助中心
			</div>
			<div style="flex: 1;display: flex;">
				<div style="flex: 1;"></div>
				<div style="width: 300px;display: flex;">
					<el-button type="text" style="color: #666;" class="top-title" @click="toLogin">登录</el-button>
					<el-button type="text" style="color: #666;margin-right: 10px;" class="top-title" @click="toEnroll">
						注册
					</el-button>
					<el-button type="text" style="color: #666;margin-right: 10px;" class="top-title" @click="toCart">
						我的购物车</el-button>
					<el-button type="text" style="color: #666;margin-right: 10px;" class="top-title"
						@click="toOrder">我的订单</el-button>
					<el-button type="text" style="color: #666;margin-right: 10px;" class="top-title">积分平台</el-button>
				</div>
			</div>
		</div>
		<!-- 搜索框和购物车 -->
		<div style="margin: 0 400px;height: 100px;line-height: 100px;">
			<div style="display: flex;">
				<div style="width: 200px;height: 100px;">
					<img src="../show/commodity1.png" style="cursor: pointer;width: 180px;height: 90px;">
				</div>
				<div style="flex: 1;text-align: center;padding: 0 50px;">
					<el-input placeholder="Ta们都在搜XXX" v-model="input" style="width: 100%;margin-top: 30px;">
						<el-button slot="append" icon="el-icon-search"></el-button>
					</el-input>
				</div>
				<div style="width: 200px;text-align: center;">
					<el-button type="warning" icon="el-icon-shopping-cart-2" @click="toCart">购物车 0 件</el-button>
				</div>
			</div>
		</div>
		<!-- 导航栏 -->
		<div style="font-size: 14px;">
			<div style="height: 40px;line-height: 40px;background-color: #333;display: flex;">
				<div class="menu-index" style="margin-left: 400px;background-color: #b31e22;color: #FFFFFF;">
					<div><i class="el-icon-menu" style="margin-right: 10px;"></i>全部分类</div>
				</div>
				<div class="menu-index">
					首页
				</div>
				<div class="menu-index">
					企业简介
				</div>
				<div class="menu-index">
					新手上路
				</div>
				<div class="menu-index">
					U袋学堂
				</div>
				<div class="menu-index">
					企业账号
				</div>
				<div class="menu-index">
					诚信合约
				</div>
				<div class="menu-index">
					实时下架
				</div>
			</div>
			<!-- 轮播图 -->
			<div style="height: 500px;overflow: hidden;">
				<div>
					<el-carousel indicator-position="outside" :loop="true" :autoplay="true" :interval="3000"
						height="500px" style="z-index: -1">
						<el-carousel-item v-for="url in imgs" :key="url">
							<el-image style="width: 50%;height: 100%;margin-top: 10px;margin-left: 100px;" :src="url"
								:fit="fit">
							</el-image>
						</el-carousel-item>
					</el-carousel>
				</div>
				<!-- 右侧菜单页 -->
				<div class="scroll-none"
					style="width: 200px;background-color: #333;height: 505px;overflow: scroll;margin-top:-530px;margin-left: 300px;zindex: 99999">
					<div style="margin: 0 10px;border-bottom: 1px solid #666;">
						<div v-for="i in 5">
							<div style="color: #FFFFFF;margin-top: 10px;"><i class="el-icon-shopping-bag-2"
									style="margin-right: 10px;"></i>家用电器</div>
							<div style="display: inline-block;margin: 10px 10px 10px 0;">
								<div>
									<el-link :underline="false" style="color: #999;">手机</el-link>
								</div>
							</div>
							<div style="display: inline-block;margin: 10px 10px 10px 0;">
								<div>
									<el-link :underline="false" style="color: #999;">运营商</el-link>
								</div>
							</div>
							<div style="display: inline-block;margin: 10px 10px 10px 0;">
								<div>
									<el-link :underline="false" style="color: #999;">数码</el-link>
								</div>
							</div>
							<div style="display: inline-block;margin: 10px 10px 10px 0;">
								<div>
									<el-link :underline="false" style="color: #999;">电脑</el-link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- 用户中心 -->
				<div class="scroll-none"
					style="width: 200px;background-color: #FFFFFF;height: 505px;overflow: scroll;margin-top:-525px;margin-left: calc(100% - 400px);z-index: 99999">
					<div class="face-box" style="height: 220px;">
						<div style="text-align: center;margin-top: 32px;">
							<img src="../show/1.jpg" style="width: 60px;height: 60px;border-radius: 50%;">
						</div>
						<div style="height: 24px;line-height: 24px;text-align: center;color: #ffffff;">
							Hi~
							<span style="color: #b31e22;">{{ this.$store.state.User.uname }}</span>
						</div>
						<div style="height: 24px;line-height: 24px;text-align: center;color: #ffffff;">
							积分:30
						</div>
						<div style="text-align: center;margin: 10px 0;">
							<el-badge :value="30" class="item">
								<el-button type="success" size="small" style="width: 150px;">已签到1天</el-button>
							</el-badge>
						</div>
					</div>

					<div style="border-top: 1px solid #eee;border-bottom: 1px solid #eee;display: flex;">
						<div style="flex: 1;border-right: 1px solid #eee;text-align: center;">
							<div style="line-height: 40px;">
								<i class="el-icon-shopping-bag-2"></i>
							</div>
							<div style="height: 24px;line-height: 24px;color: #666;">
								性别：<span style="color: #b31e22;">{{ this.$store.state.User.sex }}</span>
							</div>
						</div>
						<div style="flex: 1;text-align: center;">
							<div style="line-height: 40px;">
								<i class="el-icon-s-custom"></i>
							</div>
							<div style="height: 24px;line-height: 24px;color: #666;">
								年龄：<span style="color: #b31e22;">{{ this.$store.state.User.age }}岁</span>
							</div>
						</div>
					</div>

					<div style="border-top: 1px solid #eee;border-bottom: 1px solid #eee;display: flex;">
						<div style="flex: 1;text-align: center;">
							<div style="line-height: 40px;">
								<i class="el-icon-s-custom"></i>
							</div>
							<div style="height: 24px;line-height: 24px;color: #666;">
								用户余额：<span style="color: #b31e22;">{{ this.$store.state.User.ubalance }}元</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 商品栏 -->
			<div style="margin: 0 180px 0 300px;">
				<div>
					<div
						style="height: 40px;margin: 20px 0;background: linear-gradient(to right, #f76850, #eb3349);display: flex;">
						<div style="height: 40px;line-height: 40px;color: #FFFFFF;">
							<i class="el-icon-s-check" style="margin: 0 10px;"></i>
							商品列表
						</div>
						<!-- 商品分类导航栏 -->
						<div style="flex: 1;text-align: right;margin-right: 20px;">
							<el-button type="text" style="color: #ffffff;">手机</el-button>
							<el-button type="text" style="color: #ffffff;">零食</el-button>
							<el-button type="text" style="color: #ffffff;">电脑</el-button>
							<el-button type="text" style="color: #ffffff;">服装</el-button>
							<el-button type="text" style="color: #ffffff;">其他商品</el-button>
						</div>
					</div>
					<div style="height: 560px;display: flex;">
						<div style="width: 300px;">
							<img src="../show/idea4.jpg" style="width: 300px;height: 580px;">
						</div>
						<div style="flex: 1;margin-left: 10px;">
							<!-- <div v-for="i in 1" style="height: 350px;display: flex;"> -->
								<div v-for="i in 1" class="box">
								
								<!-- <div v-for="(commodity) in commodityList" :style="'flex: 1;' + (i > 0 ? 'margin-left: 20px;' : '')"> -->
									<div v-for="(commodity,index) in commodityList" class="Abox" v-if="index<10">
									<div>
										<img :src="commodity.image" style="height: 200px;width: 200px;">
									</div>
									<div style="display: flex;line-height: 32px;">
										<div style="color: #666666;flex: 1;text-align: right">售价：</div>
										<div style="color: red;flex: 1;" v-model="commodity.cname">{{commodity.cprice}}元
										</div>
									</div>
									<div
										style="color: #666666;height: 16px;line-height: 16px;overflow: hidden;text-overflow: ellipsis;">
										{{ commodity.cname }}
									</div>
									<div style="height: 30px; width: 150px;text-align: center;">
										<el-button size="mini" type="primary" @click="buy">购买</el-button>
										<el-button size="mini" type="success" @click="findName(commodity.cname)">购物车
										</el-button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { Table } from 'element-ui';

export default {
	data() {
		return {
			input: "",
			imgs: [
				require("../show/20.jpg"),
				require("../show/paint01.jpg"),
				require("../show/paint02.jpg"),
			],
			commodityList: [],
			commodity: {
				cid: '',
				cname: '',
				cprice: '',
				cnumber: '',
				image: ''
			},
		};
	},
	//钩子函数
	created() {
		this.loadCommodityList();
	},
	// mounted/() {},
	methods: {
		toLogin() {
			this.$router.push({
				path: "/Login"
			});
		},
		toEnroll() {
			this.$router.push({
				path: "/Register"
			});
		},
		toCart() {
			this.$router.push({
				path: "/Cart"
			});
		},
		toOrder() {

			this.$router.push({
				path: "/Order"
			});
		},
		// 获取商品列表
		loadCommodityList() {
			this.$axios({
				url: "http://localhost:8066/commodity/findCommodity",
				method: "get",
			}).then(response => {
				console.log(response);
				this.commodityList = response.data.data;
				this.$message({
					message: "数据加载完成",
					type: "success"
				});

				this.loading = false; // 关闭加载提示
			}).catch(error => {
				console.log(error);
				this.$message.error("对不起，数据存在异常");
			});
		},
		// 购买方法
		buy() { },
		// 加入购物车方法
		findName(cname) {
			this.$axios({
				url: 'http://localhost:8066/commodity/byName',
				method: 'post',
				data: {
					cname: cname,
				}
			}).then(response => {
				this.commodity = response.data.data;
				this.$store.dispatch("setCommodityAysnc", response.data.data[0]);
				console.log(response)
				this.addCart()
				this.loading = false; // 关闭加载提示
			}).catch(error => {
				console.log(error);
				this.$message.error("对不起，数据存在异常");
			});
		},
		addCart() {
			this.$axios({
				url: 'http://localhost:8066/cart/addCartInfo',
				method: 'post',
				data: {
					cid: this.$store.state.Commodity.cid,
					uid: this.$store.state.User.uid,
					catime: this.$store.state.Commodity.ctime,
					cname: this.$store.state.Commodity.cname,
					canumber: this.$store.state.Commodity.canumber,
				}
			}).then(response => {
				// console.log(this.$store.state.Commodity.cname + "***********"+ this.$store.state.Commodity.cid+"************"+this.$store.state.Commodity.ctime);
				this.commodityList = response.data.data;
				console.log(response)
				this.$message({
					message: "数据加载完成",
					type: "success"
				});
				this.loading = false; // 关闭加载提示
				this.loadCommodityList()
			}).catch(error => {
				console.log(error);
				this.$message.error("对不起，数据存在异常");
			});
		},

	},
	components: { Table }
};
</script>
<style>
.top-title:hover {
	cursor: pointer;
	color: #b31e22 !important;
}

.el-input-group__append,
.el-input-group__prepend {
	background-color: #b31e22 !important;
	color: #ffffff !important;
}

.menu-index {
	text-align: center;
	width: 100px;
	color: #FFFFFF;
	cursor: pointer;
}

.menu-index:hover {
	background-color: #666;
}

.menu-active {
	background-color: #b31e22 !important;
}

.product:hover {
	cursor: pointer;
	transform: scale(1.05);
	border-top: 1px solid red !important;
}

.menu-index {
	text-align: center;
	width: 100px;
	color: #FFFFFF;
	cursor: pointer;
}

.menu-index:hover {
	background-color: #666 !important;
}

.scroll-none::-webkit-scrollbar {
	display: none !important;
}

.face-box {
	height: 400px;
	background-size: 100% 100%;
	background-image: url('../show/s12.jpg');
}

img {
	object-fit: cover;
}
.box{
    width: 1100px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: space-between;
  }
.Abox{
    width: 210px;
    height: 300px;
  }
</style>
