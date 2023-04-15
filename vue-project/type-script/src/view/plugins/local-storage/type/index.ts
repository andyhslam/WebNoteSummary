// expire过期时间key permanent永久不过期
import { Dictionaries } from '../enum/index'
export type Key = string
export type Expire = Dictionaries.permanent | number // 永久或者时间戳
export interface Data<T> {
  value: T
  [Dictionaries.expire]: Expire
}
export interface Result<T> {
  message: string
  value: T | null
}
export interface StorageCls {
  set: <T>(key: Key, value: T, expire: Expire) => void
  get: <T>(key: Key) => void
  remove: (key: Key) => void
  clear: () => void
}
