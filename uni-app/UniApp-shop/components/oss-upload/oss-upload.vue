<template>
	<view>
		<u-upload 
		ref="upload"
		:action="action"
		:max-size="5 * 1024 * 1024"
		max-count="1"
		:custom-btn="true"
		:multiple="false"
		:show-progress="false"
		:show-upload-list="false"
		:form-data="formData"
		:deletable="false"
		:before-upload="beforeUpload"
		@on-success="onSuccess">
			<u-avatar slot="addBtn" :src="vuex_user.avatar_url" size="140"></u-avatar>
		</u-upload>
	</view>
</template>

<script>
	let _this = {}
	export default {
		name:"oss-upload",
		data() {
			return {
				action:"",
				formData:{},
				upFileName:""
			};
		},
		created() {
			_this = this
		},
		methods:{
			// 上传前拦截
			async beforeUpload(index, list) {
				const {file} = list[0]
				
				//  #ifdef H5
				const fileName = file.name
				// #endif
				
				//  #ifndef H5
				const fileName = file.path
				// #endif
				
				const ossToken = await _this.$u.api.authOssToken()
				// 设置域名
				_this.action = ossToken.host
				// 处理文件名
				const suffix = fileName.slice(fileName.lastIndexOf('.'))
				const upFileName = _this.$u.guid(20) + suffix
				this.upFileName = upFileName
				
				// 上传参数
				_this.formData = {
					'key':upFileName,//上传后的文件ming
					'policy':ossToken.policy,
					'OSSAccessKeyId':ossToken.accessid,
					'success_action_status':'200',
					'signature':ossToken.signature,
				}
				return true
			},
			// 上传成功之后
			async onSuccess() {
				this.$refs.upload.remove(0)
				
				await _this.$u.api.authAvatar({avatar:this.upFileName})
				
				this.$u.utils.UpdataUser()
				this.$u.toast('更新成功')
			}
		}
	}
</script>

<style lang="scss">

</style>
