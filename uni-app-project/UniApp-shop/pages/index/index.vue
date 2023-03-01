<template>
	<view class="content">
		<u-swiper :list="slides" name="img_url" height="320" />

		<view class="u-text-center u-m-t-30">
			<u-tabs :list="sortList" bar-width="100" item-width="160" :is-scroll="false" :current="current"
				@change="changeSort" />
		</view>

		<u-row gutter="16" class="u-skeleton">
			<u-col span="6" v-for="(goods,index) in goodsList.length !== 0 ? goodsList : 4" :key="index">
				<goods-card :goods="goods"></goods-card>
			</u-col>
		</u-row>

		<!--引用组件-->
		<u-skeleton :loading="loading" :animation="true" bgColor="#FFF"></u-skeleton>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sortList: [{
						name: "默认",
					},
					{
						name: "销量",
					},
					{
						name: "推荐",
					},
					{
						name: "最新",
					},
				],
				current: 0,
				slides: [],
				goodsList: [],
				page: 1,
				loading: false
			}
		},
		onLoad() {
			this.getData()
		},
		methods: {
			changeSort(index) {
				this.current = index
				this.goodsList = []
				this.page = 1
				this.getData()
			},
			async getData() {
				this.loading = true
				const params = {
					page: this.page
				}
				if (this.current == 1) params.sales = 1
				else if (this.current == 2) params.recommend = 1
				else if (this.current == 3) params.new = 1
				const res = await this.$u.api.index(params)
				this.loading = false
				this.slides = res.slides
				this.goodsList = [...this.goodsList, ...res.goods.data]
			}
		},
		onReachBottom() {
			this.page = this.page + 1
			this.getData()
		}
	}
</script>

<style lang="scss" scoped>

</style>
