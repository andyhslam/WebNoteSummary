<template>
  <div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, withDefaults, defineProps } from 'vue'
import { DefaultConfigs, DefaultTips, IProps } from './types'

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
</script>

<style scoped lang="scss"></style>
