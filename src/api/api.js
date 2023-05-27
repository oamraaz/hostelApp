import api from './api.json'

export default {
  get (url) {
    return api[url]
  }
}
