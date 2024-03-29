// 加载静态图片资源
import sylasPicUrl from '@/assets/images/sylas.png';

console.log('sylasPicUrl', sylasPicUrl);
const img = document.createElement('img');
img.src = sylasPicUrl;
document.body.appendChild(img);
