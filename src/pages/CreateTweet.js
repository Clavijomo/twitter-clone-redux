import React from 'react'

const CreateTweet = () => {
  return (
    <div className="md:w-full p-5 border-b border">
      <div className="rounded-2xl">
        <form className="border rounded-2xl p-5">
          <div>
            <label className="font-semibold">Nombre</label>
            <input
              className="block my-2 text-sm w-full bg-zinc-100 p-3 rounded-full"
              type="text"
              placeholder="Nombre"            
            >
            </input>
          </div>
          <div className="mt-7">
            <label className="font-semibold">Usuario</label>
            <input
              className="block my-2 text-sm w-full bg-zinc-100 p-3 rounded-full"
              type="text"
              placeholder="@ seguido de tu usuario"
            >
            </input>
          </div>
          <div className="border-t mt-5 pt-5">
            <input 
              placeholder="¿Qué está pasando?"
              className="border block w-full p-5 rounded-2xl mb-5 text-lg"
              type="text"
            />
          </div>
          <div className="flex justify-end">
            <button 
              className="bg-blue-400 py-3 px-5 rounded-full text-white text-sm font-semibold"
              type="submit"
            >
              Twittear
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTweet;