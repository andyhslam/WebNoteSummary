<template>
  <div
    class="img-wrap"
    :style="{ width: imgWidth + 'px', height: imgHeight + 'px' }"
  >
    <a
      class="mag-wrap"
      :href="link"
      :target="{ _blank: blank }"
      :style="{ width: magWidth + 'px', height: magHeight + 'px' }"
    >
      <img
        class="mag-img"
        :src="imgUrl"
        :alt="imgAlt"
        :style="{ width: imgWidth + 'px', height: imgHeight + 'px' }"
      />
    </a>
    <a class="img-link" :href="link">
      <img class="static-img" :src="imgUrl" :alt="imgAlt" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'MagnifierView',
  props: {
    imgWidth: {
      type: Number,
      default: 375,
    },
    imgHeight: {
      type: Number,
      default: 375,
    },
    magWidth: {
      type: Number,
      default: 150,
    },
    magHeight: {
      type: Number,
      default: 150,
    },
    blank: {
      type: Boolean,
      default: false,
    },
    link: String,
    imgUrl: String,
    imgAlt: String,
  },
}
</script>

<style scoped lang="scss"></style>
