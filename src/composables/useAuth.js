// composables for user authentication
import api from '../api/api'
import axios from 'axios'
import Cookies from 'js-cookie'
import { onMounted, ref } from 'vue'
import useRequest from './useRequest'

const keycloakUrl = api.get()
const guestUrl = api.get('')
const loginUrl = `${keycloakUrl}/auth/realms/CloudHouse/protocol/openid-connect/token`
const registerUrl = `${guestUrl}/guest-service/guest/register`
export default function useAuth () {
  const isAuthorized = ref(false)

  onMounted(async () => {
    const userCookie = Cookies.get('user')
    const { get } = useRequest()
    if (userCookie) {
      isAuthorized.value = true
    }
    const result = await axios.get('http://192.168.6.156:9009/booking-service/booking/available/rooms?checkIn=2023-05-28T00:00:00&checkOut=2023-05-30T00:00:00&persons=2')
    console.log(result)
  })

  const login = async (user) => {
    console.log(user)
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
          password: 'ErbIDLyUdD3FnWFzlqYC3unld1dndESi'
        }
      }
    )
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

  const register = async (user) => {
    const response = await axios.post(registerUrl, {
      firstName: user.name,
      lastName: user.lastName,
      email: user.email,
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
