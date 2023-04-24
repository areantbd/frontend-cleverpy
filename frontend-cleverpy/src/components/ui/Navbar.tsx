import { useContext } from "react"
import { JsonFunction, Link } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"

type User = {
  user: {
    username: string,
    password: string,
  },
  logOut: JsonFunction
  username: string,
  password: string,
  
}

function Navbar() {
  const userData = useContext(UserContext) as User
  const loggedUser: string = userData.user.username

  return loggedUser ? (
    <div className="navbar container d-flex">
      <Link to={'/'} className="text-decoration-none d-flex"><h2 className="ms-3 title">Prueba técnica</h2><h2 className="ms-2 name">Cleverpy</h2></Link>
      <div className="d-flex ms-auto me-3 align-items-center gap-2">
        <h5 className="text-light">Bienvenido {loggedUser}</h5>
        <span className="fa fa-user fa-lg user-icon"></span>
        <button className="btn btn-outline-danger" onClick={() => userData.logOut("")}>Logout</button>
      </div>
    </div>
  ) : (
    <div className="navbar container d-flex">
      <Link to={'/'} className="text-decoration-none d-flex"><h2 className="ms-3 title">Prueba técnica</h2><h2 className="ms-2 name">Cleverpy</h2></Link>
      <div className="d-flex ms-auto me-3 align-items-center gap-2">
        <span className="fa fa-user-o fa-lg user-icon"></span>
        <Link to={'login'} className="text-decoration-none login"><h5 className="m-0 ">LOGIN</h5></Link>
      </div>
    </div>
  )
}

export default Navbar