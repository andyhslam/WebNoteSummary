// webpack自动将es6模块化转成浏览器能够兼容的，一直兼容到底
import SMERouter from "sme-router"
import { index, signup } from "../controllers"

const router = new SMERouter("root")

router.route("/index", index(router))

router.route("/signup", signup(router))

export default router
