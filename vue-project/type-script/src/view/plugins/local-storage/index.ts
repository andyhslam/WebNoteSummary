// expire过期时间key permanent永久不过期
import { Key, Expire, Data, Result, StorageCls } from './type/index'
import { Dictionaries } from './enum/index'
export class Storage implements StorageCls {
  set<T>(key: Key, value: T, expire: Expire = Dictionaries.permanent) {
    // 定义存值的格式
    const data = {
      value, // 用户传的value
      // 中括号动态取值的方式或者说索引签名
      [Dictionaries.expire]: expire, // 存过期时间
    }
    localStorage.setItem(key, JSON.stringify(data))
  }
  get<T>(key: Key): Result<T | null> {
    const value = localStorage.getItem(key)
    if (value) {
      const data: Data<T> = JSON.parse(value)
      const now = new Date().getTime()
      // 判断是否过期
      if (
        typeof data[Dictionaries.expire] === 'number' &&
        data[Dictionaries.expire] < now
      ) {
        this.remove(key)
        return {
          message: `您的${key}已过期`,
          value: null,
        }
      } else {
        return {
          message: '成功',
          value: data.value,
        }
      }
    } else {
      return {
        message: '值无效',
        value: null,
      }
    }
  }
  remove(key: Key) {
    localStorage.removeItem(key)
  }
  clear() {
    localStorage.clear()
  }
}
