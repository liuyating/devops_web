/**
 * Created by salome on 2017/6/11.
 */
import * as actions from '../actions/aIdcList'

const state = {
  idcList: [
    {
      "id": 1,
      "code": "SHCN",
      "name": "上海-易贸大厦8楼机房",
      "address": "上海市长宁区金钟路999号",
      "province_id": 2,
      "province_name": "上海市/长宁区",
      "contact": "panjiaxuan",
      "comment": "上海总部8楼机房",
      "enable": 1
    }
  ]
}

const mutations = {
  SET_IDC_LIST (state, idcList) {
    state.idcList = idcList
  }
}

export default {
  state,
  mutations,
  actions
}
