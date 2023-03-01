<template>
	<view class="u-wrap">
		<view class="u-search-box">
			<u-search placeholder="输入商品名称" v-model="keyword" @custom="searchGoods" @clear="clearSearch"></u-search>
		</view>
		<u-tabs :list="sortList" :is-scroll="false" :current="curSort" @change="changeSort"></u-tabs>
		<view class="u-menu-wrap">
			<scroll-view scroll-y scroll-with-animation class="u-tab-view menu-scroll-view">
				<view v-for="item in categories" :key="item.id">
					<view v-for="c in item.children" :key="c.id" class="u-tab-item" :class="[currentId === c.id ? 'u-tab-item-active' : '']"
					 :data-current="c.id" @tap.stop="swichMenu(c.id)">
						<text class="u-line-1">{{c.name}}</text>
					</view>
				</view>
			</scroll-view>
			<scroll-view scroll-y class="right-box" @scrolltolower="scrollEvent">
				<view class="page-view">
					<view class="class-item">
						<view class="item-container">
							<navigator class="thumb-box" v-for="goods in goodsList" :key="goods.id + Math.random(10)" :url="'/pages/goods/show?id=' + goods.id">
								<image class="item-menu-image" :src="goods.cover_url" mode=""></image>
								<view class="item-menu-name">{{goods.title}}</view>
							</navigator>
							<view v-if="!goodsList.length" class="u-flex-1 u-p-t-80 u-p-b-80">
								<u-empty text="暂无商品" mode="list"></u-empty>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sortList: [
					{name: '默认'}, 
					{name: '销量'}, 
					{name: '推荐'},
					{name: '价格'},
					{name: '评论数'},
				],
				curSort: 0,
				curPage: 1,
				keyword: '',
				isLast: false,
				goodsList: [],
				categories: [],
				currentId: null, // 预设当前项的值
			}
		},
		onLoad() {
			this.getData()
		},
		methods: {
			changeSort(index) {
				this.curSort = index
				// 重置商品数据和分页
				this.curPage = 1
				this.goodsList = []
				this.getData()
			},
			async getData() {
				const params = {
					page: this.curPage,
					title: this.keyword,
				}
				// 判断是否有分类ID
				if(this.currentId) params.category_id = this.currentId
				// 增加排序条件
				if(this.curSort === 1) params.sales = 1
				if(this.curSort === 2) params.recommend = 1
				if(this.curSort === 3) params.price = 1
				if(this.curSort === 4) params.comments_count = 1
				const res = await this.$u.api.goodsList(params)
				this.categories = res.categories
				this.goodsList = [...this.goodsList,...res.goods.data]
				this.isLast = res.goods.next_page_url ? false : true
			},
			// 点击左边的栏目切换
			swichMenu(cid) {
				if(cid === this.currentId) return
				this.currentId = cid
				this.searchGoods()
			},
			// 搜索商品
			searchGoods() {
				this.curPage = 1
				this.goodsList = []
				this.getData()
			},
			// 清除搜索商品
			clearSearch() {
				this.keyword = ''
				this.searchGoods()
			},
			// 右侧区域滚动到底部，加载下一页
			scrollEvent(e) {
				// console.log(e)
				if(this.isLast) {
					this.$u.toast('已经到底了')
					return
				}
				this.curPage += 1
				this.getData()
			}
		},
	}
</script>

<style lang="scss" scoped>
	.u-wrap {
		height: calc(100vh);
		/* #ifdef H5 */
		height: calc(100vh - var(--window-top) - 100rpx);
		/* #endif */
		display: flex;
		flex-direction: column;
	}

	.u-search-box {
		padding: 18rpx 30rpx;
	}

	.u-menu-wrap {
		flex: 1;
		display: flex;
		overflow: hidden;
	}

	.u-search-inner {
		background-color: rgb(234, 234, 234);
		border-radius: 100rpx;
		display: flex;
		align-items: center;
		padding: 10rpx 16rpx;
	}

	.u-search-text {
		font-size: 26rpx;
		color: $u-tips-color;
		margin-left: 10rpx;
	}

	.u-tab-view {
		width: 200rpx;
		height: 100%;
	}

	.u-tab-item {
		height: 110rpx;
		background: #f6f6f6;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 26rpx;
		color: #444;
		font-weight: 400;
		line-height: 1;
	}
	
	.u-tab-item-active {
		position: relative;
		color: #000;
		font-size: 30rpx;
		font-weight: 600;
		background: #fff;
	}
	
	.u-tab-item-active::before {
		content: "";
		position: absolute;
		border-left: 4px solid $u-type-primary;
		height: 32rpx;
		left: 0;
		top: 39rpx;
	}

	.u-tab-view {
		height: 100%;
	}
	
	.right-box {
		background-color: rgb(250, 250, 250);
	}
	
	.page-view {
		padding: 16rpx;
	}
	
	.class-item {
		margin-bottom: 30rpx;
		background-color: #fff;
		padding: 16rpx;
		border-radius: 8rpx;
	}
	
	.item-title {
		font-size: 26rpx;
		color: $u-main-color;
		font-weight: bold;
	}
	
	.item-menu-name {
		font-weight: normal;
		font-size: 24rpx;
		color: $u-main-color;
	}
	
	.item-container {
		display: flex;
		flex-wrap: wrap;
	}
	
	.thumb-box {
		width: 50%;
		display: flex;
		padding: 40rpx 0;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin-top: 20rpx;
	}
	
	.item-menu-image {
		width: 120rpx;
		height: 120rpx;
	}
</style>
