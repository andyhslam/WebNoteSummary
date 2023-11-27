<template>
  <div class="ui-stars">
    <span
      v-for="selfNum in 5"
      :key="selfNum"
      class="iconfont icon-star"
      :class="{ active: selfNum <= starNum }"
      :style="{ fontSize: `${size}px` }"
      @click="setStarNum(selfNum)"
    ></span>
  </div>
</template>

<script>
import { useStars } from '../../hooks'

export default {
  name: 'StarsView',
  props: {
    num: {
      type: Number,
      default: 0,
    },
    size: {
      type: Number,
      default: 16,
    },
  },
  setup(props, ctx) {
    const [starNum, setStarNum] = useStars(props.num, () => {
      ctx.emit('getStarNum', starNum.value)
    })

    return {
      starNum,
      setStarNum,
    }
  },
}
</script>

<style scoped lang="scss">
@font-face {
  font-family: 'iconfont'; /* Project id 2748928 */
  src: url('//at.alicdn.com/t/c/font_2748928_jg2x2pxw8z.woff2?t=1701092011033')
      format('woff2'),
    url('//at.alicdn.com/t/c/font_2748928_jg2x2pxw8z.woff?t=1701092011033')
      format('woff'),
    url('//at.alicdn.com/t/c/font_2748928_jg2x2pxw8z.ttf?t=1701092011033')
      format('truetype');
}

.iconfont {
  font-family: 'iconfont' !important;
  font-size: 16px;
  font-style: normal;
  color: #999;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  &.icon-star {
    transition: color 0.3s;
  }
  &.icon-star:before {
    content: '\e64f';
  }
  &.active {
    color: #fbab06;
  }
}
</style>
