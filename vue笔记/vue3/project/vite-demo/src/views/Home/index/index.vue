<template>
  <div>{{ obj.id }}</div>
</template>

<script setup>
import { ref, reactive } from "vue";
const obj = reactive({ id: "首页" });
</script>