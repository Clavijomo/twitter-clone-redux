import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {mostrarAlertaAction} from "../actions/alertaActions"

// Actions de Redux
import { crearNuevoTweetAction } from '../actions/tweetActions';

const CreateTweet = () => {

  // States del componente
  const [nombre, guardarNombre] = useState('');
  const [usuario, guardarUsuario] = useState('');
  const [tweet, guardarTweet] = useState('');

  // Acceder al State
  const loading = useSelector(state => state.tweets.loading);
  const error = useSelector(state => state.tweets.error);
  const alerta = useSelector(state => state.alerta.alerta);

  // Dispatch para comunicarse con los Actions
  const dispatch = useDispatch();
  const agregarTweet = tweet => dispatch(crearNuevoTweetAction(tweet));

  // Redirección
  const navigate = useNavigate();

  // Submit del formulario cuando se crea un Tweet nuevo
  const submitNuevoTweet = e => {
    e.preventDefault();

    // Validación
    if(nombre.trim() === "" || usuario.trim() === "" || tweet.trim() === "") {
      const alerta = {
        msg: "Todos los campos son obligatorios",
        classes: "text-red-500 text-center my-5"
      }
      dispatch(mostrarAlertaAction(alerta));
      return;
    }

    // Si no hay errores

    // Crear el nuevo producto
    agregarTweet({
      nombre,
      usuario,
      tweet
    });

    // Redireccionar
    navigate('/listTweets');
  }

  return (
    <div className="md:w-full p-5 border-b border">
      <div className="rounded-2xl">
        <form 
          onSubmit={submitNuevoTweet}
          className="border rounded-2xl p-5">
          <div>
            <label className="font-semibold">Nombre</label>
            <input
              className="block my-2 text-sm w-full bg-zinc-100 p-3 rounded-full"
              type="text"
              placeholder="Nombre"     
              name="nombre"       
              value={nombre}
              onChange={e => guardarNombre(e.target.value)} // Función que guarda el valor del input.
            />
          </div>
          <div className="mt-7">
            <label className="font-semibold">Usuario</label>
            <input
              className="block my-2 text-sm w-full bg-zinc-100 p-3 rounded-full"
              type="text"
              placeholder="@ seguido de tu usuario"
              name="usuario"
              value={usuario}
              onChange={e => guardarUsuario(e.target.value)}
            />
          </div>
          <div className="border-t mt-5 pt-5">
            <textarea 
              placeholder="¿Qué está pasando?"
              className="border block w-full p-5 rounded-2xl mb-5 text-lg"
              type="text"
              name="tweet"
              value={tweet}
              onChange={e => guardarTweet(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button 
              className="bg-blue-400 py-3 px-5 rounded-full text-white text-sm font-semibold transition hover:bg-blue-500"
              type="submit"
            >
              Twittear
            </button>
          </div>
        </form>

        {loading ? <p>Cargando...</p> : null}
        {error ? 
          <div className="py-3 px-6 bg-red-500 mt-3 rounded-full text-center w-max mx-auto">
            <p className="text-white text-md font-semibold">Ups. ¡Hubo un error!</p> 
          </div>
          : null
        }
        {alerta ? <p className={alerta.classes}>{alerta.msg}</p> : null}
      </div>
    </div>
  )
}

export default CreateTweet;