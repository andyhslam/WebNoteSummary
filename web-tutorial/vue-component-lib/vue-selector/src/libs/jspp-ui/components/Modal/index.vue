<template>
  <div></div>
</template>

<script>
export default {
  name: 'ModalView',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 300,
    },
    borderRadius: {
      type: Number,
      default: 0,
    },
    headerBgc: {
      type: String,
      default: '#000',
    },
    headerText: {
      type: String,
      default: '',
    },
    headerTextColor: {
      type: String,
      default: '#fff',
    },
    contentText: {
      type: String,
      default: '',
    },
    contentTextColor: {
      type: String,
      default: '#000',
    },
    position: {
      type: String,
      default: 'top',
    },
    btnGroupShow: {
      type: Boolean,
      default: false,
    },
    confirmText: {
      type: String,
      default: '确定',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
  },
  setup() {
    const fn = {
      confirm() {},
      cancel() {},
    }
    return {
      ...fn,
    }
  },
}
</script>

<style scoped lang="scss"></style>
