import api from './api.json'

export default function get (url) {
  if (url === undefined) return api.gateway
  return api[url]
}
