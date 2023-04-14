import React from 'react'

const Trends = () => {
  return (
    <div className="md:w-1/3 py-5">
      <div className="bg-zinc-100 p-5 rounded-2xl">
        <h1 className="font-bold text-xl">Qué está pasando</h1>        
        <div className="mt-3">
          <p className="text-xs">Tendencias</p>
          <h1 className="font-semibold text-sm mt-1">Drake</h1>
          <p className="text-zinc-400 text-xs my-1">80,6 mil tweets</p>
        </div>
        <div className="my-5">
          <p className="text-xs">Tendencias en Colombia</p>
          <h1 className="font-semibold text-sm mt-1">Universidad Nacional</h1>
          <p className="text-zinc-400 text-xs my-1">80,6 mil tweets</p>
        </div>
        <div className="my-5">
          <p className="text-xs">Deportes</p>
          <h1 className="font-semibold text-sm mt-1">Messi</h1>
          <p className="text-zinc-400 text-xs my-1">6 mil tweets</p>
        </div>
        <div className="my-5">
          <p className="text-xs">Entretenimiento</p>
          <h1 className="font-semibold text-sm mt-1">Super Mario Bros</h1>
          <p className="text-zinc-400 text-xs my-1">100 mil tweets</p>
        </div>
        <div className="my-5">
          <p className="text-xs">Música</p>
          <h1 className="font-semibold text-sm mt-1">Reggaetón</h1>
          <p className="text-zinc-400 text-xs my-1">10,5 mil tweets</p>
        </div>
        <div className="my-5">
          <p className="text-xs">Tendencia en Bogotá D.C.</p>
          <h1 className="font-semibold text-sm mt-1">Campín</h1>
          <p className="text-zinc-400 text-xs my-1">6 mil tweets</p>
        </div>
      </div>      
    </div>
  )
}

export default Trends;