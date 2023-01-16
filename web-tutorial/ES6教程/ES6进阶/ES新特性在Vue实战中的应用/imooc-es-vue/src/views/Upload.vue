<template>
	<div class="upload-wrap">
		<label for="upload" class="choose-img">选择图片上传</label>
		<input
			ref="file"
			id="upload"
			type="file"
			accept="image/*"
			multiple
			style="display: none"
			@change="onChange"
		/>
		<p class="tip">
			提示：一次可选择多张图片，最多不超过9张（单张图片大小 &lt; 1M）
		</p>
	</div>
</template>

<script>
export default {
	name: "Upload",
	components: {},
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
			this.uploadFilesByOSS(files)
		},
		// 上传多图到阿里云OSS
		uploadFilesByOSS(files) {},
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
</style>
