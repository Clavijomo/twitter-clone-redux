import {
  AGREGAR_TWEET,
  AGREGAR_TWEET_EXITO,
  AGREGAR_TWEET_ERROR,
  COMENZAR_DESCARGA_TWEETS,
  DESCARGA_TWEETS_EXITO,
  DESCARGA_TWEETS_ERROR,
  OBTENER_TWEET_ELIMINAR,
  TWEET_ELIMINADO_EXITO,
  TWEET_ELIMINADO_ERROR,  
} from "../types"

import clienteAxios from "../config/axios";
import Swal from "sweetalert2"

// Crear nuevos Tweets
export function crearNuevoTweetAction(tweet) {
  return async (dispatch) => {
    dispatch(agregarTweet());

    try {
      // Insertar en la API
      await clienteAxios.post('/tweets', tweet);
      dispatch(agregarTweetExito(tweet));

      // Alerta de éxito
      Swal.fire(
        "Correcto",
        "El tweet se agregó correctamente",
        "success"
      );
    } 
    catch (error) {
      console.log(error);
      dispatch(agregarProductoError());

      // Alerta de error
      Swal.fire({
        icon: 'error',
        title: '¡UPS!',
        text: "Hubo un error. Intenta de nuevo."
      })
    }
  }
}

// Crear Tweet
const agregarTweet = () => ({
  type: AGREGAR_TWEET,  
});

// Crear Tweet con éxito
const agregarTweetExito = tweet => ({
  type: AGREGAR_TWEET_EXITO,
  payload: tweet,
});

// Si hubo algún error en agregar el tweet
const agregarProductoError = () => ({
  type: AGREGAR_TWEET_ERROR,
  payload: true,
});

// Función que descarga los Tweets
export function obtenerTweetsAction() {
  return async (dispatch) => {
    dispatch(descargarTweets());

    try {
      const respuesta = await clienteAxios.get('/tweets');
      dispatch(descargaTweetsExitosa(respuesta.data));            
    }
    catch (error) {
      console.log(error);
      dispatch(descargaTweetsError());
    }
  }
}

const descargarTweets = () => ({
  type: COMENZAR_DESCARGA_TWEETS,
  payload: true,
});

// Descarga los tweets exitosamente.
const descargaTweetsExitosa = tweets => ({
  type: DESCARGA_TWEETS_EXITO,
  payload: tweets,
})

// Error en la descarga de tweets.
const descargaTweetsError = () => ({
  type: DESCARGA_TWEETS_ERROR,
  payload: true,
});


// Seleccionar y elimina el producto
export function borrarTweetAction(id) {
  return async(dispatch) => {
    dispatch(obtenerTweetEliminar(id));

    try {
      // Eliminar el Tweet de la API
      await clienteAxios.delete(`/tweets/${id}`);
      dispatch(eliminarTweetExito())

      // Si se elimina, mostrar alerta
      Swal.fire(
        'Eliminado!',
        'Tweet eliminado exitosamente.',
        'success'
      )
    }
    catch(error) {
      dispatch(eliminarTweetError())
      console.log(error);
    }
  }
}

const obtenerTweetEliminar = id => ({
  type: OBTENER_TWEET_ELIMINAR,
  payload: id,
});

const eliminarTweetExito = () => ({
  type: TWEET_ELIMINADO_EXITO,
  payload: true,
});

const eliminarTweetError = () => ({
  type: TWEET_ELIMINADO_ERROR,   
})