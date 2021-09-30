import Reproductor from "./reproductor.js"

let videoMusica = new Reproductor('https://www.youtube.com/embed/DWuAn6C8Mfc', 'musica')
let videoPelicula = new Reproductor('https://www.youtube.com/embed/j-47cwN0w_c', 'peliculas')
let videoSerie = new Reproductor('https://www.youtube.com/embed/3JtW-wFkf3A', 'series')

// videoMusica.setInicio(1306)


videoPelicula.playMultimedia()
videoPelicula.playMultimedia()
videoSerie.playMultimedia()

videoMusica.setInicio(1306)




//https://stackoverflow.com/questions/13893138/javascript-click-event-listener-on-multiple-elements-and-get-target-id //11 // Why is nobody mentioning a single event which checks for the clicked element?
// document.body.addEventListener('click', (e) => {
//   let target = e.target;
//   if (target.nodeName = 'BUTTON' && target.classList.contains('collapsed') != false) {

//   }
//   //e.stopPropagation()
// });