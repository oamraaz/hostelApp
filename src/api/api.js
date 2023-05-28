import api from './api.json'

export default {
  get (url) {
    if (url === undefined) return api.gateway
    return api[url]
  }
}
