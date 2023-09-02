export { reactive } from './reactive'

/**
 * 1. export { reactive } from './reactive';
 * 2. import { reactive } from './reactive'; export { reactive };
 * 第一种导出方式，在当前文件，是获取不到reactive
 * 第二种导出方式，在当前文件，才能获取到reactive
 */