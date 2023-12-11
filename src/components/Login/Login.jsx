import React from 'react'
import "./login.css";

const Login = () => {
  return (
    <main className="contenedorlogin">
      <form className="contenedorformulario">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Usuario</span>
          <input type="text" className="form-control" placeholder="Ingrese el Usuario" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Contraseña</span>
          <input type="password" className="form-control" placeholder="Ingrese la Contraseña" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <button  className="btn btn-info">Inicio</button>
      </form>
    </main>
  )
}

export default Login
