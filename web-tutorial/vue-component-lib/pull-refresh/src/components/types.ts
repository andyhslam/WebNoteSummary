export interface IProps {
  willPullTip: string
  pullingTip: string
  loadingTip: string
  tipColor: string
  bgColor: string
  tipSize: number
  loadingDuration: number
}

export interface IData {
  refreshTip: string
  refreshHeight: number
  refreshShow: boolean
  needTransition: boolean
}

export interface ITouchingPosition {
  start: number
  end: number
}

export enum DefaultTips {
  WILL_PULL_TIP = '下拉即可刷新...',
  PULLING_TIP = '释放即可刷新...',
  LOADING_TIP = '加载中...',
}

export enum DefaultConfigs {
  TIP_COLOR = '#ccc',
  TIP_SIZE = 14,
  BG_COLOR = '#fff',
  LOADING_DURATION = 1000,
  MIN_REFRESHING_HEIGHT = 60,
  TRANSITION_DURATION = 0.3,
}
