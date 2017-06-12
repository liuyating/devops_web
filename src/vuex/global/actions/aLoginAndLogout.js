import axios from 'axios'
// import qs from 'qs'
// import * as GLOBAL from './aUtil'

export const Login = ({commit}, _this) => {
  if (_this.username !== '' && _this.password !== '') {
    _this.logining = true;
    axios({
      method: 'get',
      url: '/api/main/login'
      // data: qs.stringify({'username': comp.account.username, 'password': comp.account.password})
    }).then(function (response) {
      _this.logining = false;
      if (response.data.success === true) {
        localStorage.setItem('access-token', response.data.msg.token)
        localStorage.setItem('access-user', _this.account.username)
        commit('LOGIN_USER_DETAIL', response.data.msg.user)
        _this.$router.push({path: '/dashboard'})
      } else {
      }
    }).catch(function (error) {
      console.log(error)
      // GLOBAL.apiReturnError(error, comp.$router)
    })
  } else {
    _this.alert('用户名密码不能为空！');
  }
}

// export const Logout = ({commit}, router) => {
//   localStorage.clear()
//   router.push({path: '/login'})
// }
