// composables for user authentication
import get from '../api/api'
import axios from 'axios'
import Cookies from 'js-cookie'
import { onMounted, ref } from 'vue'

const keycloakUrl = get('keyclock')
const guestUrl = get()
const loginUrl = `${keycloakUrl}/auth/realms/CloudHouse/protocol/openid-connect/token`
const registerUrl = `${guestUrl}/guest-service/guest/register`
export default function useAuth () {
  const isAuthorized = ref(false)
  onMounted(async () => {
    const userCookie = Cookies.get('user')
    if (userCookie) {
      isAuthorized.value = true
    }
  })

  const login = async (user) => {
    console.log(loginUrl)
    const response = await axios.post(
      loginUrl,
      {
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
          password: 'dQSivpLAPBVwtv5oujItax3D3JATDfGO'
        }
      }
    )

    if (response.data.access_token) {
      Cookies.set('user', JSON.stringify(response.data),
      Cookies.set('email', JSON.stringify(user.username)),
        // 1 hour
        { expires: 1 / 24 })
      isAuthorized.value = true
      console.log('успех')
    } else {
      console.log('неудача')
      console.log(response)
    }
    return response
  }

  const register = async (user) => {
    const response = await axios.post(registerUrl, {
      firstName: user.name,
      lastName: user.lastName,
      email: user.username,
      birthDate: '2001-12-08',
      citizenship: user.citizenship,
      password: user.password
    })
    if (response.data.access_token) {
      Cookies.set('user', JSON.stringify(response.data),
      // 1 hour
        { expires: 1 / 24 })
      isAuthorized.value = true

      console.log('успех')
    } else {
      console.log('неудача')
      console.log(response)
    }
    return response
  }

  const logout = () => {
    Cookies.remove('user')
    isAuthorized.value = false
  }

  return {
    login,
    logout,
    register,
    isAuthorized
  }
}
