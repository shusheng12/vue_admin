import { getToken, setToken } from '@/utils/auth.js'
import { login } from '@/api/user.js'


const state = {
  token: getToken()
}
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token,
      setToken(token)
  }
}

const actions = {
  async login({ commit }, data) {
    return new Promise((resolve, reject) => {
      login(data).then(res => {
        commit('SET_TOKEN', res.data.data.token)
        resolve(res);
      }).catch(err => {
        reject(err)
      })
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
