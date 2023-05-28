// composables for user

import Cookies from 'js-cookie'
import { onMounted, ref } from 'vue'

export default function useUser () {
  const user = ref(null)

  onMounted(() => {
    const userCookie = Cookies.get('user')
    if (userCookie) {
      user.value = JSON.parse(userCookie)
    }
  }
  )
  return { user }
}
