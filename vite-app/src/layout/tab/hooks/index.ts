import { onMounted } from 'vue'

type Options = {
  el: string
}

export default function (options: Options): Promise<{ baseUrl: string }> {
  return new Promise((resolve) => {
    onMounted(() => {
      let img: HTMLImageElement = document.querySelector(options.el) as HTMLImageElement
      console.log('hooks-img', img);
      img.onload = () => {
        resolve({
          baseUrl: base64(img)
        })
      }
    })
    const base64 = (el: HTMLImageElement) => {
      const canvas = document.createElement('canvas') // 创建canvas
      const ctx = canvas.getContext('2d') // 给canvas指定2d的环境
      canvas.width = el.width
      canvas.height = el.height
      ctx.drawImage(el, 0, 0, canvas.width, canvas.height)
      const ext = el.src.substring(el.src.lastIndexOf('.') + 1).toLowerCase()
      return canvas.toDataURL('image/' + ext) // 导出base64图片
    }
  })
}
