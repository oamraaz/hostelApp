import axios from 'axios'
import Cookies from 'js-cookie'

const API_URL = 'http://localhost:9004/auth/realms/CloudHouse/protocol/openid-connect/token'

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
