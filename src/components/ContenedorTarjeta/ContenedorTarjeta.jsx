import Tarjetas from "../Tarjetas"
import "./contenedortarjeta.css"
const ContenedorTarjeta = () => {
  return (
    <>
      <main className="contenedor">
      <Tarjetas ruta="https://cdn.marvel.com/u/prod/marvel/i/mg/a/40/656f548b3eef6/detail.jpg" 
      titulo="Card titulo"
      descripcion="soy una descripcion"/>

      </main>
    </>
  )
}

export default ContenedorTarjeta
