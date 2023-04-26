import { Route, Routes } from 'react-router-dom'
import MainScreen from './screens/MainScreen'
import { PostsScreen } from './screens/PostsScreen'
import LoginScreen from './screens/LoginScreen'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainScreen />}/>
        <Route path='/posts' element={<PostsScreen />}/>
        <Route path='/login' element={<LoginScreen />}/>
      </Routes>
    </>
  )
}

export default App
