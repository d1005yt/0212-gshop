//包含工具函数

import {
  v4 as uuidv4
} from 'uuid'

export function getUserTempId() {
  let userTempId = localStorage.getItem('USER_TEMP_ID_KEY')
  if (!userTempId) {
    userTempId = uuidv4()
    localStorage.setItem('USER_TEMP_ID_KEY', userTempId)
  }

  return userTempId
}

//保存用户信息到local
export function saveUserInfo(userInfo) {
  window.localStorage.setItem('USER_INFO_KEY', JSON.stringify(userInfo))
}

//读取local中用户信息
export function getUserInfo(userInfo) {
  return JSON.parse(window.localStorage.getItem('USER_INFO_KEY')) || {}
}

//删除local中用户信息
export function removeUserInfo() {
  window.localStorage.removeItem('USER_INFO_KEY')
}