import axios from '@/tools/requires'

export const classify = () => {
  return axios({
    url: '/data/classify.json'
  })
}

export const sort = () => {
  return axios({
    url: '/data/sort.json'
  })
}

export const screen = () => {
  return axios({
    url: '/data/screen.json'
  })
}

export const foodList = (keyword) => {
  if (keyword === 'sales') {
    return axios({
      url: '/data/foodList-sales.json'
    })
  } else if (keyword === '美食') {
    return axios({
      url: '/data/foodList.json'
    })
  } else if (keyword === '美团超市') {
    return axios({
      url: '/data/supermarket.json'
    })
  } else if (keyword === '生鲜果蔬') {
    return axios({
      url: '/data/fruits.json'
    })
  } else if (keyword === '正餐优选') {
    return axios({
      url: '/data/foodList.json'
    })
  } else if (keyword === '甜点饮品') {
    return axios({
      url: '/data/drink.json'
    })
  } else if (keyword === 'distance') {
    return axios({
      url: 'data/foodList-distance.json'
    })
  } else if (keyword === '饺子混沌') {
    return axios({
      url: 'data/food_dumplings.json'
    })
  } else if (keyword === '快餐便当') {
    return axios({
      url: 'data/food_fastFood.json'
    })
  } else if (keyword === '鲜花蛋糕') {
    return axios({
      url: 'data/flower.json'
    })
  } else {
    return axios({
      url: '/data/foodList.json'
    })
  }
}
