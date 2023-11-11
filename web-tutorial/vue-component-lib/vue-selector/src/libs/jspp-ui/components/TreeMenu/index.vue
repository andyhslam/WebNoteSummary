<template>
  <div class="tree-menu">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TreeMenu',
}
</script>

<style lang="scss" scoped>
.tree-menu {
  width: 100%;
  color: #fff;
  background-color: #000;
}
</style>
