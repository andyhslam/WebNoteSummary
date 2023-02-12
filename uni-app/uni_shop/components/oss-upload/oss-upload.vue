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
	>
		<u-avatar slot="addBtn" :src="vuex_user.avatar_url" size="140"></u-avatar>
	</u-upload>
</template>

<script>
	export default {
		name: "oss-upload",
		data() {
			return {
				action: '',
				formData: {},
			};
		},
		methods: {
			// 上传前的钩子
			beforeUpload(index, list) {
				return true
			}
		}
	}
</script>

<style>

</style>
