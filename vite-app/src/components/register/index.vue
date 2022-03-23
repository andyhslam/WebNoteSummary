<template>
	<div class="register">
		<table>
			<td>账号</td>
			<td><input type="text" v-model="form.registerName" /></td>
			<td>密码</td>
			<td><input type="password" v-model="form.registerPsd" /></td>
			<td>验证码</td>
			<td><input type="text" v-model="form.registerCode" /></td>
			<button @click="submit">注册</button>
		</table>
	</div>
</template>

<script setup lang="ts">
import { reactive, onActivated, onDeactivated } from "vue"
const form = reactive({
	registerName: "",
	registerPsd: "",
	registerCode: "",
})
const submit = () => {
	console.log(form)
}
onActivated(() => {
	form.registerCode = ""
})
</script>

<script lang="ts">
export default {
	name: "Register",
}
</script>

<style lang="less" scoped></style>
