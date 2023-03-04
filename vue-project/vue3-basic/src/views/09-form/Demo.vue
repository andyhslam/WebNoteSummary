<script setup>
import { ref } from 'vue'
const textValue = ref('add')
const textAreaValue = ref('a')
const checked = ref(true)
const picked = ref('One')
const favorites = ref([])
const selectedValue = ref([])
const handleInput = (e) => {
  textValue.value = e.target.value
}
</script>

<template>
  <div>
    <p>{{ textValue }}</p>
    <input type="text" :value="textValue" @input="handleInput" />
    <input type="text" v-model="textValue" />
  </div>
  <div>
    <p style="white-space: pre-line">{{ textAreaValue }}</p>
    <textarea v-model="textAreaValue"></textarea>
  </div>
  <div>
    <label for="check-box">是否删除</label>
    <input id="check-box" type="checkbox" v-model="checked" />{{ checked }}
  </div>
  <div>
    <span>{{ picked }}</span>
    <input type="radio" value="One" v-model="picked" />One
    <input type="radio" value="Two" v-model="picked" />Two
  </div>
  <div>
    <span>{{ favorites }}</span>
    <input type="checkbox" value="教育" v-model="favorites" />教育
    <input type="checkbox" value="动漫" v-model="favorites" />动漫
    <input type="checkbox" value="新闻" v-model="favorites" />新闻
  </div>
  <div>
    <span>{{ selectedValue }}</span>
    <select v-model="selectedValue" multiple>
      <option value="001">北京</option>
      <option value="002">上海</option>
      <option value="003">深圳</option>
    </select>
  </div>
</template>

<style scoped lang="css"></style>
