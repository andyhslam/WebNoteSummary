<template>
	<div class="upload-wrap">
		<label
			for="upload"
			class="choose-img"
			:class="{ upLoading: isUploading }"
			>选择图片上传</label
		>
		<input
			ref="file"
			id="upload"
			type="file"
			accept="image/*"
			multiple
			style="display: none"
			:disabled="isUploading"
			@change="onChange"
		/>
		<p class="tip">
			提示：一次可选择多张图片，最多不超过9张（单张图片大小 &lt; 1M）
		</p>
		<ul class="img-container">
			<li
				v-for="(item, index) of imgList"
				:key="index"
				:style="{ background: `url(${item}) no-repeat center/contain` }"
			></li>
		</ul>
	</div>
</template>

<script>
import OSS from "ali-oss"
export default {
	name: "Upload",
	components: {},
	data() {
		return {
			imgList: [], // 存放上传完成的图片列表
			isUploading: false, // 当前图片是否正在上传
			client: new OSS({
				region: "oss-cn-hongkong",
				bucket: "andy-imooc-es",
				accessKeyId: "",
				accessKeySecret: "",
			}),
		}
	},
	methods: {
		onChange() {
			const newFiles = this.$refs?.file?.files
			if (newFiles.length > 9) {
				alert("一次最多选择9张图片")
				return false
			}
			const files = []
			for (const file of newFiles) {
				const size = file.size / 1024 / 1024
				if (size > 1) {
					alert("请选择1M以内的图片")
					return false
				}
				files.push(file)
			}
			this.uploadFilesByOSS2(files)
		},
		// 上传多图到阿里云OSS
		uploadFilesByOSS(files) {
			this.isUploading = true
			const uploadRequest = []
			for (const file of files) {
				const singlePromise = new Promise((resolve, reject) => {
					this.client
						.put(`${Math.random()}-${file.name}`, file)
						.then((res) => {
							resolve(res.url)
						})
						.catch((err) => {
							reject(err)
						})
				})
				uploadRequest.push(singlePromise)
			}
			Promise.allSettled(uploadRequest)
				.then((res) => {
					const imgs = []
					for (const item of res) {
						if (item.status === "fulfilled") {
							imgs.push(item.value)
						}
					}
					this.imgList = imgs
					this.isUploading = false
				})
				.catch((err) => {
					console.log(err)
				})
		},
		// 上传多图到阿里云OSS-async/await
		async uploadFilesByOSS2(files) {
			this.isUploading = true
			const imgs = []
			for (const file of files) {
				const result = await this.client.put(
					`${Math.random()}-${file.name}`,
					file
				)
				imgs.push(result.url)
			}
			this.imgList = imgs
			this.isUploading = false
		},
	},
}
</script>
<style scoped>
.choose-img {
	display: block;
	width: 120px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	background-color: #42b983;
	color: #fff;
	border-radius: 5px;
	cursor: pointer;
}
.tip {
	color: #ccc;
}
.img-container > li {
	list-style: none;
	width: 120px;
	height: 100px;
	float: left;
	margin: 0 30px 30px 0;
	border: 1px solid #ccc;
}
.upLoading {
	background-color: #ccc;
}
</style>
