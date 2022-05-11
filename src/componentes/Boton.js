import React from 'react'

import '../css/Boton.css';

export default function Boton({texto, esBotonClic, manejarClic}) {
  return (
    <button
        className={esBotonClic ? "boton-clic" : "boton-reiniciar"}
        onClick={manejarClic}
    >
        {texto}
    </button>
  )
}
