import Multimedia from "./multimedia.js";
import funcionPublica from "./funcionPublica.js";

export default class Reproductor extends Multimedia {
  constructor(url = '', id = '') {
    super(url)
    let _id = id
    this.getId = () => _id
  }

  get id() {
    return this.getId()
  }

  playMultimedia() {
    funcionPublica(this.getUrl(), this.getId())
  }

  setInicio(tiempoInicio) {
    funcionPublica(`${this.getUrl()}?start=${tiempoInicio}`, this.getId())
  }
}