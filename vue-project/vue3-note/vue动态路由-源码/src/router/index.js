import Vue from 'vue'
import VueRouter from 'vue-router'
// import { getNavData } from '@/utils/http' //导入请求
import navData from "@/utils/navData"; //公共复用的数据
import store from '@/store'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: () =>
        import ('../views/rightMain/content/Home.vue')
}];

const router = new VueRouter({
    linkActiveClass: 'selected',
    routes
})

//路由拦截
router.beforeEach((to, from, next) => {
    //动态生成路由数据
    addRoutes();
    next();
});

function addRoutes() {
    if (store && store.state.nav.length == 0) {
        let data = routesData(navData);
        console.log('data===', data);
        //减少请求，数据缓存
        store.dispatch('SETNAV', navData);
        //动态添加
        router.addRoutes(data);
    }
}

// function addRoutes() {
//     getNavData().then(res => {
//         if (store && store.state.nav.length == 0) {
//             //拼接数据（路由）
//             var data = routesData(res.data.result);
//             //减少请求，数据缓存
//             store.dispatch('SETNAV', res.data.result);
//             //动态添加
//             router.addRoutes(data);
//         }
//     })
// }

//拼接数据（路由）
function routesData(result) {
    result.forEach(item => {
        routes.push({
            path: item.path,
            name: item.name,
            meta: { title: item.title },
            component: () =>
                import ('../views/rightMain/content/' + item.component)
        })
    })
    return routes
}

export default router