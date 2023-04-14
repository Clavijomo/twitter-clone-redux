import {
  AGREGAR_TWEET,
  AGREGAR_TWEET_EXITO,
  AGREGAR_TWEET_ERROR,
  COMENZAR_DESCARGA_TWEETS,
  DESCARGA_TWEETS_EXITO,
  DESCARGA_TWEETS_ERROR,
  OBTENER_TWEET_ELIMINAR,
  TWEET_ELIMINADO_EXITO,
  TWEET_ELIMINADO_ERROR
} from "../types"

const initialState = {
  tweets: [],
  error: null,
  loading: false,
  tweetEliminar: null,
}

export default function(state = initialState, action) {
  switch(action.type) {

    case AGREGAR_TWEET:
      case COMENZAR_DESCARGA_TWEETS:
        return {
          ...state,      
          loading: true,  
        }
    
    case AGREGAR_TWEET_EXITO:
      return {
        ...state,
        loading: false,
        tweets: [...state.tweets, action.payload]
      }

    case AGREGAR_TWEET_ERROR:
      case DESCARGA_TWEETS_ERROR:
        case TWEET_ELIMINADO_ERROR:
          return {
            ...state,
            loading: false,
            error: action.payload,
          }
    
    case DESCARGA_TWEETS_EXITO:
      return {
        ...state,
        loading: false,
        error: false,
        tweets: action.payload,
      }

    case OBTENER_TWEET_ELIMINAR:
      return {
        ...state,
        tweetEliminar: action.payload,
      }

    case TWEET_ELIMINADO_EXITO:
      return {
        ...state,
        tweets: state.tweets.filter(tweet => tweet.id !== state.tweetEliminar),
        tweetEliminar: null,
      }

    default:
      return state;
  }
}