<template>
	<view>
		<view class="top">
			<u-search placeholder="请输入订单单号进行物流查询" @search="search" :show-action="false" v-model="keyword"></u-search>
		</view>
		<view class="container">
			<u-time-line v-show="length!=0?true:false">
				<u-time-line-item nodeTop="2">
					<!-- 此处自定义了左边内容，用一个图标替代 -->
					<template v-slot:node>
						<view class="u-node" style="background: #19be6b;">
							<!-- 此处为uView的icon组件 -->
							<u-icon name="pushpin-fill" color="#fff" :size="24"></u-icon>
						</view>
					</template>
					<template v-slot:content>
						<view>
							<view class="u-order-title">待取件</view>
							<view class="u-order-desc">[自提柜]您的快件已放在楼下侧门，直走前方53.6米，左拐约10步，再右拐直走，见一红灯笼停下，叩门三下，喊“芝麻开门”即可。</view>
							<view class="u-order-time">2019-05-08 12:12</view>
						</view>
					</template>
				</u-time-line-item>
				<u-time-line-item>
							<!-- 此处没有自定义左边的内容，会默认显示一个点 -->
							<template v-slot:content>
								<view>
									<view class="u-order-desc">【深圳市】日照香炉生紫烟，遥看瀑布挂前川，飞流直下三千尺，疑是银河落九天。</view>
									<view class="u-order-time">2019-12-06 22:30</view>
								</view>
							</template>
						</u-time-line-item>
			</u-time-line>
			<u-empty class="empty" icon-size="100px" :show="length>0?false:true" mode="search"></u-empty>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword:"",
				length:1,
			};
		},
		methods: {
			async query() {
				const res = await this.$u.api.express(this.keyword).catch(error=>{
					if(error.statusCode == 404) {
						this.$u.toast('未能找到这个订单,请检查单号')
					}
				})
				if (res) {
					this.length = 1
				}
				console.log(res);
			},
			search() {
				console.log(this.keyword);
				if (this.keyword!="") {
					this.query()
				}else {
					this.$u.toast('请输入订单Id')
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.top {
	padding: 20rpx 40rpx;
}
.container {
	padding: 40px;
}
.u-node {
	width: 44rpx;
	height: 44rpx;
	border-radius: 100rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #d0d0d0;
}

.u-order-title {
	color: #333333;
	font-weight: bold;
	font-size: 32rpx;
}

.u-order-desc {
	color: rgb(150, 150, 150);
	font-size: 28rpx;
	margin-bottom: 6rpx;
}

.u-order-time {
	color: rgb(200, 200, 200);
	font-size: 26rpx;
}
</style>
