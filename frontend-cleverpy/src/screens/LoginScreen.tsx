import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  const [type, setType] = useState("password")
  const navigate = useNavigate()

  const setUserAndGoToPosts = () => {
    localStorage.setItem("user", "2")
    navigate('/posts')    
  }

  return (
    <div className="container mt-5" style={{height: 500}}>
      <div className="d-flex flex-column w-50 mx-auto p-3 m-t5 input-group-text gap-2">
        <div className="input-group">
          <span className="input-group-text"><i className="fa fa-user fa-fw"></i></span>
          <input type="text" placeholder="username" className="form-control"/>
        </div><div className="input-group">
          <span className="input-group-text"><i className="fa fa-key fa-fw"></i></span>
          <input type={type} placeholder="password" id="password" className="form-control"/>
          <span className="input-group-text"><i className="fa fa-eye fa-fw" onClick={() => type === "password" ? setType("text") : setType("password")}></i></span>
        </div>
        <button className="btn btn-primary mt-2" onClick={() => setUserAndGoToPosts()}>Login</button>
      </div>
    </div>
  )
}

export default Login