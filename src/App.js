import "./App.css";
import logopro from "./imagenes/logopro.png";
import Boton from "./componentes/Boton";
import Contador from "./componentes/hojas-de-estilos/contador";
import { useState } from "react";

function App() {
  const [numclics, setNumClics] = useState(0);

  const manejarClic = () => {
    console.log("clic");
    setNumClics(numclics + 1);
  };

  const reiniciarContador = () => {
    console.log("reiniciar");
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="logo-contenedor-gral">
        <img className="logo-contenedor" src={logopro} alt="contenedor logo" />
      </div>
      <div className="contenedor-principal">
        <Contador numclics={numclics} />
        <Boton texto="clic" esBotondeClic={true} manejarClic={manejarClic} />

        <Boton
          texto="reiniciar"
          esBotondeClic={true}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
