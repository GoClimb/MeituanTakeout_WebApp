import axios from 'axios'

export const index = () => {
  return axios({
    url: '/api/j/operation/homepage.json',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
