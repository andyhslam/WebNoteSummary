<template>
  <div>{{ obj.id }}</div>
</template>

<script setup>
import { ref, reactive } from "vue";
const obj = reactive({ id: "统计管理" });
</script>