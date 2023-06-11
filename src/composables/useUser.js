// composables for user

import axios from 'axios'
import Cookies from 'js-cookie'
import { onMounted, ref } from 'vue'
import get from '../api/api'

export default function useUser () {
  const user = ref(null)
  const bookings = ref(null)
  const token = JSON.parse(Cookies.get('user')).access_token
  const info = JSON.parse(Cookies.get('email'))
  onMounted(async () => {
    console.log(info)
    user.value = await getUser()
    bookings.value = await getBookings()
    console.log(bookings.value)
  }
  )

  async function getUser () {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: get() + '/guest-service/guest/info/?email=' + info,
      headers: {
        Authorization: `Bearer ${token}`
      },
      maxRedirects: 0
    }
    const { data: { data } } = await axios.request(config)
    return data
  }

  async function getBookings () {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: get() + '/booking-service/booking/all/user',
      headers: {
        Authorization: `Bearer ${token}`
      },
      maxRedirects: 0
    }
    const { data: { data } } = await axios.request(config)
    return data
  }





  return { user, bookings }
}
