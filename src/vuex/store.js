/**
 * Created by salome on 2017/6/11.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import LoginAndLogoutStore from './global/modules/mLoginAndLogout'
import IdcListStore from './asset/modules/mIdcList'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Login: LoginAndLogoutStore,
    Idc: IdcListStore
  }
})
