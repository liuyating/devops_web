/**
 * Created by salome on 2017/6/11.
 */
import * as actions from '../actions/aLoginAndLogout'

const state = {
  user: {
    username: ''
  }
}

const mutations = {
  LOGIN_USER_DETAIL (state, userDetail) {
    state.user = userDetail
  }
}

export default {
  state,
  mutations,
  actions
}
