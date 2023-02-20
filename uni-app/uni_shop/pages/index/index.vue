<template>
	<view class="wrap">
		<u-swiper :list="slides" name="img_url" height="320"></u-swiper>
		<u-tabs :list="sortList" :is-scroll="false" :current="curSort" @change="changeSort"></u-tabs>
		<u-row gutter="16"  class="u-skeleton">
			<u-col span="6" v-for="(goods, index) in goodsList" :key="index">
				<goods-card :goods="goods"></goods-card>
			</u-col>
		</u-row>
		<u-skeleton :loading="loading" :animation="true" bgColor="#FFF"></u-skeleton>
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
					{name: '最新'},
				],
				curSort: 0,
				slides: [],
				goodsList: [{}, {}, {}, {}],
				page: 1,
				loading: false,
			}
		},
		onLoad() {
			this.getIndexData()
		},
		onReachBottom() {
			// 重新请求数据，带上分页参数
			this.page += 1
			this.getIndexData()
		},
		methods: {
			changeSort(index) {
				this.curSort = index
				// 重置商品数据和分页
				this.goodsList = [{}, {}, {}, {}]
				this.page = 1
				this.getIndexData()
			},
			async getIndexData() {
				this.loading = true
				const params = {
					page: this.page
				}
				// 增加排序条件
				if(this.curSort === 1) params.sales = 1
				if(this.curSort === 2) params.recommend = 1
				if(this.curSort === 3) params.new = 1
				const res = await this.$u.api.index(params)
				this.loading = false
				// console.log('首页数据', res);
				this.slides = res.slides
				// this.goodsList.push(...res.goods.data)
				this.goodsList = this.goodsList.pop().title ? [...this.goodsList, ...res.goods.data] : res.goods.data
			},
		},
	}
</script>

<style lang="scss" scoped>

</style>

