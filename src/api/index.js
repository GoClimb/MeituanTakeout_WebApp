import axios from '@/tools/requires'

export const classify = () => {
  return axios({
    url: '/data/index.json'
  })
}

export const screen1 = () => {
  return axios({
    url: '/data/sort.json'
  })
}

export const screen2 = () => {
  return axios({
    url: '/data/screen.json'
  })
}

export const foodList = (keyword) => {
  if (keyword === 'sales') {
    return axios({
      url: '/data/foodList-sales.json'
    })
  } else if (keyword === 'distance') {
    return axios({
      url: 'data/foodList-distance.json'
    })
  } else {
    return axios({
      url: '/data/foodList.json'
    })
  }
}
