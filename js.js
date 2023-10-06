
const lista = document.getElementById('lista');
const base = document.getElementById('base');

const reproductorAudio = document.getElementById('reproductorAudio');

//Listas de reproducción (se pueden agregar aca mas generos, hay que sumar botones)
const playlists = {
  rock: ["pirata","naufrago", "nadaEsGratisEnLaVida", "whatsername", "laRengaElFinalEsEnDondeParti"],
  cumbia: ["NestorEnBloqueEnganchado"],
  regeton: ["fanaticaDeLoSensual", "ellaMeLevanto", "dileATuAmiga","laPregunta"],
  electronica: ["panamericano", "SweetDisposition"],
  radio: ["Borderline", "ShinerInTheDark","soloUnMomento","WeekendsandWorkdays"],
  
  
};


function mostrarLista(genero) {
  lista.innerHTML = ''; 
  const canciones = playlists[genero]; 
  
  if (canciones) {
    // Si existen canciones para el género seleccionado
    canciones.forEach((cancion, index) => {
      const titulo = document.createElement('h2');  
      titulo.style.cursor = 'pointer'
      titulo.style.color= "#2b4e32"
      titulo.style.fontSize= '30px'
      titulo.style.marginBottom = '5px'
      titulo.textContent = canciones[index] ;
      titulo.addEventListener('click', () => seleccionarMusica(cancion));
      lista.appendChild(titulo);
    });
  } else {
    // Si no se encuentra el género seleccionado
    lista.innerHTML = '<p>No se encontraron canciones para este género.</p>';
  }
}

// Función para seleccionar y reproducir una canción
function seleccionarMusica(cancion) {
  const nuevoAudio = document.createElement('audio')
  const rutaCancion = `sonido/canciones/${cancion}.mp3`; 
  
  
  nuevoAudio.src = rutaCancion;
  nuevoAudio.type= "audio/mpeg"
  nuevoAudio.setAttribute('controls', 'controls');
  nuevoAudio.style.backgroundColor = '#2b4e32';
  base.style.height= '615px'
  reproductorAudio.innerHTML = '';
  reproductorAudio.appendChild(nuevoAudio);
  nuevoAudio.play();
  
}


