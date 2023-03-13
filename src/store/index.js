import Vue from 'vue'
import Vuex from 'vuex'
import {login} from '@/api/login'
import {getUserInfo} from '@/api/user'

Vue.use(Vuex)

export default new Vuex.Store({
    // 定义状态
    state: {
        // 首页所选的日期 校区 种类
        select: {
            date: '',
            campus: '',
            categoryId: '',
        },
        // token放在LocalStorage
        token: localStorage.token,
        // userInfo放在SessionStorage
        userInfo: JSON.parse(sessionStorage.getItem("userInfo"))
    },

    // 改变状态
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
            localStorage.setItem("token", token)
        },
        SET_CAMPUS: (state, campus) => {
            state.select.campus = campus;
        },
        SET_DATE: (state, date) => {
            state.select.date = date;
        },
        SET_CATEGORY_ID: (state, categoryId) => {
            state.select.categoryId = categoryId;
        },
        SET_USERINFO: (state, userInfo) => {
            state.userInfo = userInfo
            sessionStorage.setItem("userInfo", JSON.stringify(userInfo))
        }
    },

    // 执行方法
    actions: {
        // 登录
        login({commit}, user) {
            return new Promise((resolve, reject) => {
                login(user).then(res => {
                    if (res.state ===200){
                        commit('SET_TOKEN', res.data.token)
                        commit("SET_USERINFO", res.data)
                        resolve()
                    }
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // 退出登录
        logout({commit}) {
            commit('SET_TOKEN', '')
            commit("SET_USERINFO", '')
            location.reload()
        },
        // 获取用户信息
        getUserInfo({commit}, jwt) {
            return new Promise((resolve, reject) => {
                getUserInfo(jwt).then((res) => {
                    if (res.data.state === 200) {
                        commit('SET_USERINFO', res.data.data);
                        resolve(res.data)
                    } else {
                        localStorage.removeItem("token");
                        reject(res.data.msg)
                    }
                }).catch((error) => {
                    commit('SET_USERINFO', "");
                    localStorage.removeItem("token");
                    reject(error)
                })
            })
        },
        // 更新用户信息
        updateUserInfo({commit}, user) {
            let userInfo;
            userInfo.username = user.username
            userInfo.avatar = user.avatar
            userInfo.id = user.id
            commit('SET_USERINFO', userInfo)
        }
    },

    // 获取状态
    getters: {
        getUser: state => {
            return state.userInfo
        }
    },
})
