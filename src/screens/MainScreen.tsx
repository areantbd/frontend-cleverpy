import { Link } from "react-router-dom"

function MainScreen() {
  return (
    <div className="mt-1 d-flex flex-column text-light nav-shadow">
      <div className="container mt-3">        
        <h3>Prueba técnica desarrollada por <a className="text-light" href="https://github.com/areantbd" target="_blank">Iván Rodríguez</a> para el proceso selectivo de un desarrollador front-end con React y TypeScript en <a className="text-light" href="https://cleverpy.com/" target="_blank">Cleverpy</a></h3>
        <br />
        <h4 className="mt-3"><b>TECNOLOGÍAS UTILIZADAS Y FUNCIONALIDADES IPLEMENTADAS:</b></h4>
        <hr />
        <ul >
          <li>El código ha sido desarrollado en Visual Studio Code, usando React con Vite y TypeScript.</li>
          <li>He usado por primera vez tanto Vite como TypeScript.</li>
          <li>He utilizado también por primera vez un flujo de trabajo, con ramas y merges.</li>
          <li>Para estilos he usado SASS compaginado con Bootstrap para el layout y algunos colores.</li>
          <li>Componentes 100% creados por mi.</li>
          <li>Uso de Hooks (useState, useEffect, useContext).</li>
          <li>Axios para la importación de datos desde el API.</li>
          <li>React Router Dom para la navegación por las pantallas.</li>
          <li>Posts con texto cortado, que al hacer hover se muestra completo.</li>
          <li>Texto editable.</li>
          <li>Tarjetas eliminables.</li>
          <li>Mensaje si no hay tarjetas.</li>
          <li>Pantalla de Login.</li>
          <li>Falso Login con formulario para el uso del Context.</li>
          <li>Test simple con Vitest, primera vez creando tests.</li>
          <li>Breadcrumbs.</li>
        </ul>
        <Link to={'/posts'} className="btn btn-sm d-inline button" style={{maxWidth: 200}} >POSTS</Link>
        <small className="d-block text-end mb-2 fw-lighter mt-4 ms-auto quote" >"From experience, I can tell you, you miss 100% of the shots you don't take"</small>
      </div>
    </div>
  )
}

export default MainScreen