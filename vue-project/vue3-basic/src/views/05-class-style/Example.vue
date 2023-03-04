<script setup>
import { ref } from 'vue'
const currentIndex = ref(0)
const list = ref(['line 1', 'line 2', 'line 3'])
const handleClick = (index) => {
  currentIndex.value = index
}
</script>

<template>
  <div>
    <ul>
      <li
        v-for="(item, index) in list"
        :class="{ active: currentIndex === index }"
        @click="handleClick(index)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="css">
.active {
  color: #f40;
  font-size: 30px;
}
</style>
