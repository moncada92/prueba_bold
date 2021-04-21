import React from 'react'
import {BsInfoCircle} from 'react-icons/bs'

export default function TotalVentas({fecha, total}) {
  const year = new Date().getFullYear()

  return (
    <div className="TotalVentas">
      <div className="totalVentas_head">
        <p>Total de Ventas de {fecha} <BsInfoCircle /></p>
      </div>
      <div className="totalVentas_body">
        <p className="precio">${total}</p>
        <p className="fecha_pre">{fecha}, {year}</p>
      </div>
    </div>
  )
}
