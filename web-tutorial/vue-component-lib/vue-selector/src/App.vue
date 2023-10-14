<template>
  <div id="app">
    <div class="container">
      <Selector
        :data="selectorData"
        @setItemValue="setItemValue"
        placeholder="请选择框架"
      />
    </div>
  </div>
</template>

<script>

import selectorData from '@/data/selector';

import { ref } from 'vue';

export default {
  name: 'App',
  setup () {
    
    const val = ref('');

    const setItemValue = (value) => {
      val.value = value;

      console.log(val.value);
    }

    return {
      selectorData,
      setItemValue
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    width: 500px;
    height: 1000px;
    margin: 200px auto;
  }
</style>