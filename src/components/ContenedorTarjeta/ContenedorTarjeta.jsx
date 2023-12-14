import { useEffect, useState } from "react";
import Tarjetas from "../Tarjetas"
import "./contenedortarjeta.css"
import axios from "axios";

const ContenedorTarjeta = () => {
  const [datos, setDatos] = useState([]);
  const ts = 2;
  const key = "f6be4d1c03e414cd02465298832b1761";
  const categoria = "comics";
  const hash = "22eded1f262ac862d28fab91bbd7511b";
  const url = `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${key}&hash=${hash}`;

  useEffect(() => {
    const solicitud = async () => {
      try {
        const respuesta = await axios.get(url);
        setDatos(respuesta.data.data.results);
        console.log(datos);
      } catch (error) {
        console.log("Hubo un error:", error);
      }
    };

    solicitud();
  }, []);

  return (
    <>
      <main className="contenedor">
        {datos.map((item) => (
          <Tarjetas
            key={item.id}
            ruta={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}
            titulo={item.title}  
            descripcion={item.description}
          />
        ))}
      </main>
    </>
  );
};

export default ContenedorTarjeta;
