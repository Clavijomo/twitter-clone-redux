import React, {useEffect} from 'react'
import Tweet from '../components/Tweet';

// Redux
import {useSelector, useDispatch} from "react-redux";
import { obtenerTweetsAction } from '../actions/tweetActions';

const ListTweets = () => {

  // Obtener el State
  const tweets = useSelector(state => state.tweets.tweets);

  // Actions
  const dispatch = useDispatch();

  useEffect(() => {
    // Consultar la API
    const cargarTweets = () => dispatch(obtenerTweetsAction());
    cargarTweets();
  }, [])

  return (
    <div className="md:w-full border-b border py-5 h-full overflow-auto">
      <div>
        {tweets.length ? 
        <div className="px-5">
          <h1 className="font-semibold text-xl">Tweets</h1>
        </div>:  null}
        {!tweets.length ? <div className="flex h-96 items-center justify-center">
          <p className="text-lg text-zinc-400">Aún no hay tweets</p>
        </div> 
        :        
         (          
          tweets.map((tweetPublic, index) => (
            <Tweet 
              key={index}
              tweetPublic={tweetPublic}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default ListTweets;