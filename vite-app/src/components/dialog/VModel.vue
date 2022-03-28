<template>
	<div v-if="modelValue" class="dvm">
		<div class="dvm-header">
			<h2>标题---{{ vmTitle }}</h2>
			<span @click="closeDialogVm">x</span>
		</div>
		<div class="dvm-content">
			<el-table :data="tableData">
				<el-table-column fixed prop="date" label="Date" width="150" />
				<el-table-column prop="name" label="Name" width="120" />
				<el-table-column prop="state" label="State" width="120" />
				<el-table-column prop="city" label="City" width="120" />
				<el-table-column prop="address" label="Address" width="600" />
				<el-table-column prop="zip" label="Zip" width="120" />
				<el-table-column fixed="right" label="Operations" width="120">
					<template #default>
						<el-button type="text" size="small">Detail</el-button>
						<el-button type="text" size="small">Edit</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script setup lang="ts">
type Props = {
	modelValue: boolean
	vmTitle: string
	modelModifiers?: {
		qingwen: boolean
	}
	vmTitleModifiers?: {
		tc: boolean
	}
}
const propData = defineProps<Props>()

const emit = defineEmits(["update:modelValue", "update:vmTitle"])
const closeDialogVm = () => {
	emit("update:modelValue", false)
	console.log(propData.vmTitleModifiers)
	if (propData.vmTitleModifiers?.tc) {
		emit("update:vmTitle", "探春")
	} else {
		emit("update:vmTitle", "晴雯")
	}
}

const tableData = [
	{
		date: "2016-05-03",
		name: "Tom",
		state: "California",
		city: "Los Angeles",
		address: "No. 189, Grove St, Los Angeles",
		zip: "CA 90036",
		tag: "Home",
	},
	{
		date: "2016-05-02",
		name: "Tom",
		state: "California",
		city: "Los Angeles",
		address: "No. 189, Grove St, Los Angeles",
		zip: "CA 90036",
		tag: "Office",
	},
	{
		date: "2016-05-04",
		name: "Tom",
		state: "California",
		city: "Los Angeles",
		address: "No. 189, Grove St, Los Angeles",
		zip: "CA 90036",
		tag: "Home",
	},
	{
		date: "2016-05-01",
		name: "Tom",
		state: "California",
		city: "Los Angeles",
		address: "No. 189, Grove St, Los Angeles",
		zip: "CA 90036",
		tag: "Office",
	},
]
</script>

<style lang="less" scoped>
.dvm {
	width: 800px;
	height: 240px;
	border: 1px solid #ccc;
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	&-header {
		display: flex;
		justify-content: space-between;
		padding: 2px;
		border-bottom: 1px solid #ccc;
		span {
			cursor: pointer;
		}
	}
	&-content {
		padding: 2px;
	}
}
</style>
