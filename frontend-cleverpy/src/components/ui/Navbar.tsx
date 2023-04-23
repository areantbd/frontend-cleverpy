import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar container d-flex">
      <Link to={'/'} className="text-decoration-none text-dark"><h1 className="ms-3">Prueba técnica Cleverpy</h1></Link>
      <div className="d-flex ms-auto me-3 align-items-center gap-2">
        <span className="fa fa-user fa-lg"></span>
        <Link to={'login'}><h5 className="m-0">LOGIN</h5></Link>
        {/* <h3></h3> */}
      </div>
    </div>
  )
}

export default Navbar