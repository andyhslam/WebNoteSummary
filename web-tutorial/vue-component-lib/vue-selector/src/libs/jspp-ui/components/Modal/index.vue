<template>
  <div class="modal-mask" v-show="show">
    <div
      class="ui-modal"
      :style="{
        width: `${width}px`,
        borderRadius: `${borderRadius}px`,
        top: position === 'center' ? '50%' : '50px',
        transform:
          position === 'center' ? 'translate(-50%, -50%)' : 'translateX(-50%)',
      }"
    >
      <header
        class="header"
        :style="{ color: headerTextColor, backgroundColor: headerBgc }"
      >
        <h1>{{ headerText }}</h1>
        <a href="javascript:;" :style="{ color: headerTextColor }">&times;</a>
      </header>
      <article class="content">
        <p :style="{ color: contentTextColor }">{{ contentText }}</p>
      </article>
      <div class="btn-group" v-if="btnGroupShow">
        <button class="btn btn-confirm">{{ confirmText }}</button>
        <button class="btn btn-cancel">{{ cancelText }}</button>
      </div>
    </div>
  </div>
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

<style scoped lang="scss">
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  .ui-modal {
    position: fixed;
    left: 50%;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 1px 2px 3px #333;
  }
  a {
    text-decoration: none;
    outline: none;
    color: #333;
  }
  h1,
  p {
    font-weight: normal;
    margin: 0;
  }
  button {
    outline: none;
    border: none;
  }
  .header {
    height: 44px;
    padding: 0 14px;
    box-sizing: border-box;
    h1 {
      display: inline-block;
      font-size: 18px;
      line-height: 44px;
    }
    a {
      float: right;
      font-size: 20px;
      margin-top: 6px;
    }
  }
  .content {
    padding: 0 14px;
    box-sizing: border-box;
  }
}
</style>
