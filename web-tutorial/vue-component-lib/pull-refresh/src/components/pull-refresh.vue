<template>
  <div class="pull-refresh">
    <div
      v-show="refreshShow"
      class="refresh-wrapper"
      :style="{ height: refreshHeight + 'px', backgroundColor: bgColor }"
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
import { reactive, toRefs, defineEmits, withDefaults, defineProps } from 'vue'
import { DefaultConfigs, DefaultTips, IProps, IData } from './types'

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
})

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
