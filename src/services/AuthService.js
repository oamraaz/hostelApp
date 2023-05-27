import axios from 'axios'
import Cookies from 'js-cookie'
import api from '../api/api'
const keycloakUrl = api.get('keyclock')
const API_URL = `http://${keycloakUrl}/auth/realms/CloudHouse/protocol/openid-connect/token`

console.log(API_URL)
class AuthService {
  async login (user) {
    const response = await axios.post(API_URL, {
      username: user.username,
      password: user.password,
      grant_type: 'password'
    },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      auth: {
        username: 'cloudhouse',
        password: 'Ov8jMh8gKGZRmzJ38cfPR0gJnywusMCz'
      }
    })
    if (response.data.access_token) {
      Cookies.set('user', JSON.stringify(response.data), { expires: 0.5 })
      console.log('успех')
    }

    return response
  }

  logout () {
    Cookies.remove('user')
  }

  getCurrentUser () {
    const userCookie = Cookies.get('user');
    return userCookie ? JSON.parse(userCookie) : null;
  }
}

export default new AuthService()
