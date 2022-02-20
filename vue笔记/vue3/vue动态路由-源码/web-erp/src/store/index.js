import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        nav: []
    },
    mutations: {
        setnav(state, data) { // 设置导航菜单
            state.nav = data;
        }
    },
    actions: { //管理mutations
        SETNAV({ commit }, data) { // 添加导航数据
            commit('setnav', data)
        }
    },
    modules: {}
})