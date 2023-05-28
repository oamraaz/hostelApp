// composables for requests

import axios from 'axios'
import api from '../api/api'
import { ref } from 'vue'

export default function useRequest () {
  const get = async (context) => {
    const url = `${api.get()}/${context}`
    return await axios.get(url)
  }

  return { get }
}
