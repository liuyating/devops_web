/**
 * Created by salome on 2017/6/11.
 */
import axios from 'axios'
// import * as GLOBAL from '../../global/actions/aUtil'

export const getIdcList = ({commit}, comp) => {
  axios({
    method: 'get',
    url: '/api/asset/idc',
    headers: {'Authorization': 'Token ' + localStorage.getItem('access-token')}
  }).then(function (res) {
    commit('SET_IDC_LIST', res.data)
  }).catch(function (error) {
    console.log(error)
    // GLOBAL.apiReturnError(error, comp.$router)
  })
}
