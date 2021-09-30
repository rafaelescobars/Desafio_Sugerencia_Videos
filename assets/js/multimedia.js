export default class Multimedia {
  constructor(url = '') {
    let _url = url
    this.getUrl = () => _url
  }

  get url() {
    return this.getUrl()
  }

  set inicio(_cualquierCosa) {
    return `Este método es para realizar un cambio en la URL del video`
  }
}