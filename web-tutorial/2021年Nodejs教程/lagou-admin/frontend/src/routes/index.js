// webpack自动将es6模块化转成浏览器能够兼容的，一直兼容到底
import SMERouter from "sme-router"
import { index, login } from "../controllers"

const router = new SMERouter("root")

router.route("/", login(router))

router.route("/index", index(router))

router.route("/login", login(router))

export default router
