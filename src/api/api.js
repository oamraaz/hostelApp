import api from './api.json'

export default {
  get () {
    console.log(api.gateway)
    return api.gateway
  }
}
