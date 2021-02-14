export default class providerProducts {
  _nameUrl = 'https://murmuring-tor-81614.herokuapp.com/api/goods'

  getAnswer = async url => {
    const data = await fetch(`${this._nameUrl}${url}`)
    if (!data.ok) {
      throw new Error(`Could not fetch ${url}, received ${data.status}`)
    }
    return await data.json()
  }

  getProducts = async (dealers = []) => {
    const query = dealers.length ? `/?dealers=${dealers.join(',')}` : '/'
    const products = await this.getAnswer(query)
    return products.map(this._transformProducts)
  }

  getImageProduct = url => {
    return `https://murmuring-tor-81614.herokuapp.com${url}`
  }

  getUniqId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2)
  }

  _transformProducts = (products, getUniqId) => {
    return {
      id: this.getUniqId(),
      title: products.name,
      price: products.price,
      image: products.image
    }
  }
}
