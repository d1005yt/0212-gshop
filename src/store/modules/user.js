/* 管理用户的 */
import {
  getUserTempId,
  saveUserInfo,
  getUserInfo,
  removeUserInfo
} from '@/utils'
import {
  reqRegister,
  reqLogin,
  reqLogout
} from '@/api'

export default {
  state: {
    userInfo: getUserInfo(),
    userTempId: getUserTempId()
  },

  mutations: {
    RECEIVE_USER_INFO(
      state,
      userInfo
    ) {
      state.userInfo = userInfo
    },
    
    RESET_USER_INFO(state) {
      state.userInfo = {}
    }
  },

  actions: {
    //注册
    async register({
      commit
    }, userInfo) {
      const result = await reqRegister(userInfo)
      if (result.code !== 200) {
        throw new Error(result.message || '注册失败')
      }
    },

    //登陆
    async login({
      commit
    }, {
      mobile,
      password
    }) {
      const result = await reqLogin(mobile, password)
      if (result.code == 200) {
        const userInfo = result.data
        // 通过commit触发mutation调用 ==> 保存信息到state
        commit('RECEIVE_USER_INFO', userInfo)
        // 保存localStorage中  ===> 从而可以实现自动登陆的功能
        saveUserInfo(userInfo)
      } else {
        throw new Error(result.message || '登陆失败')
      }
    },

    //退出登陆
    async logout({
      commit
    }) {
      const result = await reqLogout()
      if (result.code === 200) {
        commit('RESET_USER_INFO')
        removeUserInfo()
      } else {
        throw new Error(result.message || '退出登陆失败')
      }
    }
  },
  getters: {},
}