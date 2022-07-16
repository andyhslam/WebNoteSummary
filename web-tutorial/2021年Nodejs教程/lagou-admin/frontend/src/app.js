// 载入css
import "./assets/css/common.css"

// 载入路由
import router from "./routes"

// 第一个打开的页面，路由导航
const hash = location.hash.slice(1)
router.go(hash)
