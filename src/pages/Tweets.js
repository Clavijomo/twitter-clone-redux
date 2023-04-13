import React from 'react'

const Tweets = () => {
  return (
    <div className="md:w-full border-b border">            
      <div className="border-b pt-5 pb-8">
        <input
          placeholder="Buscar en Twitter"
          className="bg-zinc-100 block w-11/12 mx-auto pl-5 py-3 rounded-full placeholder:text-zinc-400"
          type="text"
        ></input>
      </div>

      <div className="p-3">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-sm">NBA</p>
          <p className="font-semibold text-sm text-zinc-500">Final - <span className="font-normal">Ganó CHI</span></p>
        </div>
        <div className="mt-2">
          <div className="bg-red-700 rounded-t-md p-3 flex items-center justify-between">
            <h1 className="text-white font-bold">Chicago Bulls</h1>
            <h1 className="text-white font-bold text-2xl">109</h1>
          </div>
          <div className="bg-red-600 rounded-b-md p-3 flex items-center justify-between">
            <h1 className="text-white font-bold">Toronto Raptors</h1>
            <h1 className="opacity-50 text-white font-bold text-2xl">105</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tweets;