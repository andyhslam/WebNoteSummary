<template>
  <div
    class="pull-refresh"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <div
      v-show="refreshShow"
      class="refresh-wrapper"
      :style="{
        height: refreshHeight + 'px',
        backgroundColor: bgColor,
        transition: transitionStatus,
      }"
    >
      <span :style="{ color: tipColor, fontSize: tipSize + 'px' }">{{
        refreshTip
      }}</span>
    </div>
    <div class="content-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  reactive,
  toRefs,
  computed,
  defineEmits,
  withDefaults,
  defineProps,
} from 'vue'
import { DefaultConfigs, DefaultTips, IProps, IData } from './types'

let loadingStatus = false

const emit = defineEmits<{
  (e: 'refreshing'): void
  (e: 'refreshed'): void
}>()

const props = withDefaults(defineProps<IProps>(), {
  willPullTip: DefaultTips.WILL_PULL_TIP,
  pullingTip: DefaultTips.PULLING_TIP,
  loadingTip: DefaultTips.LOADING_TIP,
  tipColor: DefaultConfigs.TIP_COLOR,
  bgColor: DefaultConfigs.BG_COLOR,
  tipSize: DefaultConfigs.TIP_SIZE,
  loadingDuration: DefaultConfigs.LOADING_DURATION,
})

const state = reactive<IData>({
  refreshTip: props.willPullTip,
  refreshHeight: 0,
  refreshShow: false,
  needTransition: false,
})

const transitionStatus = computed(() =>
  state.needTransition
    ? `height ${DefaultConfigs.TRANSITION_DURATION}s`
    : 'none'
)

const handleTouchStart = (e: TouchEvent) => {
  2
}

const handleTouchMove = (e: TouchEvent) => {
  3
}

const handleTouchEnd = (e: TouchEvent) => {
  4
}

function setTip(tip: string) {
  state.refreshTip = tip
}
// 设置固定值的时候，用来还原
function setRefreshHeight(height: number) {
  state.refreshHeight = height
}
// 越往下，高度越小
function addRefreshHeight(distance: number) {
  state.refreshHeight += distance
}

function setNeedTransition(status: boolean) {
  state.needTransition = status
}

function setRefreshShow(status: boolean) {
  state.refreshShow = status
}

function setLoadingStatus(status: boolean) {
  loadingStatus = status
}

const { refreshTip, refreshHeight, refreshShow } = toRefs(state)
</script>

<style scoped lang="scss">
.pull-refresh {
  overflow-y: auto;
  height: 100vh;
  .refresh-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
}
</style>
