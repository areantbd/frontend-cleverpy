import { SetStateAction, createContext, useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"

export const UserContext = createContext({})

const INITIAL_STATE = {
  username: "Perico",
  password: "PruebaPAss"
}

interface props {
  children: JSX.Element | JSX.Element[]
}

function UserContextProvider({ children }: props) {
  const [user, setUser] = useState(INITIAL_STATE)
  const navigate = useNavigate()

  // useEffect(() => {
  //   const isLoaded = localStorage.getItem("user") === "true" 
  //   if (isLoaded) {
  //     localStorage.getItem("user")
  //       .then((user) => setuser(user))
  //       .catch((user) => setuser(null))
  //   } else {
  //     setuser(null)
  //   }
  // }, [])

  function logOut() {
    // localStorage.clear()
    setUser({ username: "", password: ""})
    navigate('/')
  }

  const logIn = (user: SetStateAction<{ username: string; password: string }>) => {
    setUser(user)
  }

  const value ={
    user,
    logIn,
    logOut
  }

  if (user === undefined){
    return <></>
  } 
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserContextProvider;