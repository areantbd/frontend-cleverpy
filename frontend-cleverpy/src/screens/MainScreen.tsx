import { Link } from "react-router-dom"

function MainScreen() {
  return (
    <div className="container mt-3">
      <h3>Prueba técnica desarrollada por <a className="text-dark" href="https://github.com/areantbd" target="_blank">Iván Rodríguez</a> para el proceso selectivo de un desarrollador front-end con React y TypeScript en <a className="text-dark" href="https://cleverpy.com/" target="_blank">Cleverpy</a></h3>
      <ul>
        <li>El código ha sido desarrollado en Visual Studio Code, usando React con Vite y TypeScript.</li>
        <li>He usado por primera vez tanto Vite como TypeScript.</li>
        <li>Para estilos he usado SASS compaginado con Bootstrap para el layout y algunos colores.</li>
        <li>Componentes 100% creados por mi.</li>
        <li>Uso de Hooks (useState, useEffect, useContext).</li>
        <li>Axios para la importación de datos desde el API.</li>
        <li>React Router Dom para la navegación por las pantallas.</li>
        <li>Posts con texto cortado, que al hacer hover se muestra completo.</li>
        <li>Texto editable.</li>
        <li>Tarjetas eliminables.</li>
        <li>Mensaje si no hay tarjetas.</li>
        <li>Pantalla de Login</li>
        <li></li>
      </ul>
      <Link to={'/posts'} className="btn btn-primary">Posts</Link>
    </div>
  )
}

export default MainScreen