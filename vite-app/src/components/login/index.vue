<template>
	<div>
		<table>
			<tr>
				<td>账号</td>
				<td><input type="text" v-model="form.loginName" /></td>
			</tr>
			<tr>
				<td>密码</td>
				<td><input type="password" v-model="form.loginPsd" /></td>
			</tr>
		</table>
		<button @click="submit">登录</button>
	</div>
</template>

<script setup lang="ts">
import {
	reactive,
	onMounted,
	onUnmounted,
	onActivated,
	onDeactivated,
} from "vue"
const form = reactive({
	loginName: "",
	loginPsd: "",
})
const submit = () => {
	console.log(form)
}
onActivated(() => {
	console.log("login onActivated")
})
onDeactivated(() => {
	console.log("login onDeactivated")
})
onMounted(() => {
	console.log("login onMounted")
})
onUnmounted(() => {
	console.log("login onUnmounted")
})
</script>

<script lang="ts">
export default {
	name: "Login",
}
</script>

<style lang="less" scoped></style>
