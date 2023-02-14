<template>
	<u-upload 
		:action="action" 
		:max-size="5 * 1024 * 1024"
		 max-count="1"
		:before-upload="beforeUpload"
		:custom-btn="true"
		:form-data="formData"
		:multiple="false"
		:deletable="false"
		width="0"
		height="0"
		@on-success="onSuccess"
	>
		<u-avatar slot="addBtn" :src="vuex_user.avatar_url" size="140"></u-avatar>
	</u-upload>
</template>

<script>
	let _this = {};
	export default {
		name: "oss-upload",
		data() {
			return {
				action: '',
				formData: {},
			};
		},
		created() {
			/* 
			 因为beforeUpload方法不是通过事件触发，而是通过props传递，在组件内部执行；
			 在小程序平台，beforeUpload方法里面的this可能会丢失，因此需要定义一个全局的变量。
			 */
			_this = this;
		},
		methods: {
			// 上传前的钩子
			async beforeUpload(index, list) {
				// 请求API，获取oss-token
				const ossToken = await _this.$u.api.authOssToken()
				const { host, policy, accessid, signature} = ossToken
				// 设置上传域名
				_this.action = host
				// 处理唯一的文件名
				const {file} = list[0]
				// #ifdef H5
				const fileName = file.name
				// #endif
				
				// #ifndef H5
				const fileName = file.path
				// #endif
				
				const suffix = fileName.slice(fileName.lastIndexOf('.'))
				const upFileName = _this.$u.guid(20) + suffix
				
				// 额外的上传参数
				_this.formData = {
					policy,
					signature,
					'key': upFileName, // 上传到oss后的文件名
					'OSSAccessKeyId': accessid,
					'success_action_status': '200',
				}
				return true
			},
			// 图片上传成功时触发	
			onSuccess() {
				// 请求API，更新头像
				// 更新缓存的用户信息
			},
		}
	}
</script>

<style>

</style>
