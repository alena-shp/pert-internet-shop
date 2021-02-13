export default class providerProducts {
  _nameUrl = 'https://murmuring-tor-81614.herokuapp.com/api/goods'

  getAnswer = async url => {
    const data = await fetch(`${this._nameUrl}${url}`)
    if (!data.ok) {
      throw new Error(`Could not fetch ${url}, received ${data.status}`)
    }
    return await data.json()
  }

  getAllProducts = async () => {
    const products = await this.getAnswer(`/`)
    return products.map(this._transformProducts)
  }

  getIdProducts = async () => {
    const idProducts = await this.getAnswer(`/dealers/`)
    return idProducts
  }

  getProduct = async id => {
    const products = await this.getAnswer(`/?dealers=${id}`)
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
