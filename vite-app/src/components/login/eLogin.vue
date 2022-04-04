<template>
	<div class="login">
		<el-card class="box-card">
			<el-form
				ref="loginForm"
				:rules="rules"
				:model="formInline"
				class="demo-form-inline"
			>
				<el-form-item label="账号：" prop="user">
					<el-input
						placeholder="请输入账号"
						v-model="formInline.user"
					/>
				</el-form-item>
				<el-form-item label="密码：" prop="password">
					<el-input
						type="password"
						placeholder="请输入密码"
						v-model="formInline.password"
					></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit">登录</el-button>
				</el-form-item>
			</el-form>
		</el-card>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
import { useRouter } from "vue-router"
import type { FormItemRule, FormInstance } from "element-plus"
import { ElMessage } from "element-plus"

const router = useRouter()
type Form = {
	user: string
	password: string
}
type Rules = {
	[K in keyof Form]?: Array<FormItemRule>
}
const formInline = reactive<Form>({
	user: "",
	password: "",
})
const loginForm = ref<FormInstance>()
const rules = reactive<Rules>({
	user: [
		{
			required: true,
			message: "请输入账号",
			type: "string",
			trigger: "blur",
		},
	],
	password: [
		{
			required: true,
			message: "请输入密码",
			type: "string",
			trigger: "blur",
		},
	],
})

const onSubmit = () => {
	loginForm.value?.validate((validate) => {
		if (validate) {
			router.push("/index")
			localStorage.setItem("token", "lx")
		} else {
			ElMessage.error("请输入完整的信息")
		}
	})
}
</script>

<style lang="less" scoped>
.login {
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
