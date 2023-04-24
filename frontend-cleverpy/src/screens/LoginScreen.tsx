import * as React from "react"
import { JsonFunction, useNavigate } from "react-router-dom"
import { UserContext } from "../components/contexts/UserContext"

type User = {
  user: {
    username: string,
    password: string,
  },
  logIn: JsonFunction
  username: string,
  password: string,
  
}

function Login() {
  const [type, setType] = React.useState("password")
  const navigate = useNavigate()
  const user = React.useContext(UserContext) as User
  let username = ""
  let password = ""

  function setUserAndGoToPosts(): void {
    user.logIn({username: username, password: password})
    navigate('/posts')
  }

  return (
    <div className="nav-shadow mt-1" style={{height: 650}}>
      <div className="d-flex flex-column w-50 mx-auto p-3 pt-5 input-group-text gap-2 login-form border border-0">
        <form onSubmit={() => setUserAndGoToPosts()} className="d-flex flex-column gap-2">
          <div className="input-group">
            <span className="input-group-text span border border-0 text-light"><i className="fa fa-user fa-fw"></i></span>
            <input type="text" onChange={() => {username = event?.target?.value}} placeholder="username" id="username" className="form-control"/>
          </div><div className="input-group">
            <span className="input-group-text span border border-0 text-light"><i className="fa fa-key fa-fw"></i></span>
            <input type={type} onChange={() => {password = event?.target?.value}} placeholder="password" id="password" className="form-control"/>
            <span className="input-group-text span border border-0 text-light"><i className="fa fa-eye fa-fw" onClick={() => type === "password" ? setType("text") : setType("password")}></i></span>
          </div>
          <button className="btn  mt-2 button" type="submit" >Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login