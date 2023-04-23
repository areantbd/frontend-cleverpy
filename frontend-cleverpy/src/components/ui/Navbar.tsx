import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"

function Navbar() {
  const user = useContext(UserContext)
  const loggedUser = user.user.username
  loggedUser && console.log("navbar:", user)
  return loggedUser ? (
    <div className="navbar container d-flex">
      <Link to={'/'} className="text-decoration-none text-dark"><h1 className="ms-3">Prueba técnica Cleverpy</h1></Link>
      <div className="d-flex ms-auto me-3 align-items-center gap-2">
        <h5>Bienvenido {user?.user?.username}</h5>
        <span className="fa fa-user fa-lg"></span>
        <button className="btn btn-outline-danger" onClick={() => user.logOut()}>Logout</button>
      </div>
    </div>
  ) : (
    <div className="navbar container d-flex">
      <Link to={'/'} className="text-decoration-none text-dark"><h1 className="ms-3">Prueba técnica Cleverpy</h1></Link>
      <div className="d-flex ms-auto me-3 align-items-center gap-2">
        <span className="fa fa-user-o fa-lg"></span>
        <Link to={'login'}><h5 className="m-0">LOGIN</h5></Link>
      </div>
    </div>
  )
}

export default Navbar