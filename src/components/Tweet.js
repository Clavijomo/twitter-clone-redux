import React from 'react'
import {useDispatch} from "react-redux"
import { borrarTweetAction } from '../actions/tweetActions';
import Swal from "sweetalert2";

const Tweet = ({tweetPublic}) => {
  
  const {nombre, imageProfile, tweet, usuario, id} = tweetPublic;

  // Action
  const dispatch = useDispatch();
  
  // Confirmar si desea eliminarlo
  const confirmarEliminarTweet = id => {
    // Preguntar
    Swal.fire({
      title: `${nombre}, estás seguro de eliminar este tweet?`,
      text: "Un tweet que se elimina no se puede recuperar.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        // Pasarlo al Action
        dispatch(borrarTweetAction(id));      
      }
    })
  }

  return (
    <div className="border-b px-5 py-5 relative">
      <div className="flex items-start gap-3">
        <div>
          <img src="https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg" className="w-12 rounded-full object-cover" />
        </div>
        <div className="w-11/12">          
          <div className="flex gap-1 items-center">
            <h1 className="text-md font-semibold">{nombre}</h1>
            <p className="text-sm text-zinc-400 text-sm">{usuario}</p>
          </div>
          <div>
            <p className="mt-1 text-md text-zinc-600">{tweet}</p>
            <div className="flex gap-6 items-center mt-3 absolute top-0 right-5">
              <button 
                onClick={() => confirmarEliminarTweet(id)}
                className="text-xs text-red-500 font-bold text-white rounded-full hover:text-red-600">Quitar</button>
            </div>
          </div>          
        </div>        
      </div>      
    </div>
  )
}

export default Tweet;