<template>
	<div>
		<button @click="changeStr">改朝换代</button>
		<span>{{ message }}</span>
		<br />
		<button @click="changeObj">改名换姓</button>
		<span>{{ obj.name }}</span>
		<br />
		<button @click="changeName">偷天换日</button>
		<span>{{ person }}</span>
	</div>
</template>

<script setup lang="ts">
import { ref, Ref, isRef, shallowRef, triggerRef, customRef } from "vue"
name: "Ref全家桶"
// let message = ref<string | number>("凯瑟琳")
let message: Ref<string | number> = ref("凯瑟琳")
type Obj = {
	name: string
}
let obj: Ref<Obj> = shallowRef({ name: "Jessica" })
let notRef: number = 123
const changeStr = () => {
	message.value = "艾米"
	console.log(isRef(message))
	console.log(isRef(notRef))
}
const changeObj = () => {
	// obj.value = { name: "Alba" } // 修改value才能被监听到
	obj.value.name = "Alba"
	triggerRef(obj) // 强制更新页面DOM
}
function MyRef<T>(value: T) {
	return customRef((track, trigger) => {
		return {
			get() {
				track()
				console.log("get")
				return value
			},
			set(newVal: T) {
				console.log("set")
				value = newVal
				trigger()
			},
		}
	})
}
let person = MyRef<string>("Adams")
const changeName = () => {
	person.value = "Jones"
}
</script>

<style></style>
