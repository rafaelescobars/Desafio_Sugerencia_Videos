const funcionPublica = (() => {
  const funcionPrivada = (url, id) => {
    document.querySelector(`#${id}`).setAttribute('src', url)
  }
  return (url, id) => funcionPrivada(url, id)
})()

export default funcionPublica