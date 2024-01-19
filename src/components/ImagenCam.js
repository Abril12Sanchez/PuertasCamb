import React, { useState } from "react";
import "../styles.css";

export function CambiarIma() {
  const [puertaAbierta, setPuertaAbierta] = useState(false);

  const cambiarEstadoPuerta = () => {
    setPuertaAbierta(!puertaAbierta);
  };

  return (
    <>
    <div className="cont" style={{backgroundColor:"#FFF8CF"}}>
      <h1 className="tit">PUERTAS</h1>
      <p>
        <img className="puertas"
          src={process.env.PUBLIC_URL + `/images/puerta_${puertaAbierta ? 'abierta' : 'cerrada'}.png`}
          alt={puertaAbierta ? 'Puerta Abierta' : 'Puerta Cerrada'}
        />
      </p>
      <p>
        <button className="butt" onClick={cambiarEstadoPuerta}>Abrir | Cerrar</button>
      </p>
      </div>
    </>
  );
}

