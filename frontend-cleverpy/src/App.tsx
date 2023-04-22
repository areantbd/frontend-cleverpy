import { Route, Routes } from 'react-router-dom'
import MainScreen from './screens/MainScreen'
import { PostsScreen } from './screens/PostsScreen'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainScreen />}/>
        <Route path='/posts' element={<PostsScreen />}/>
      </Routes>
    </>
  )
}

export default App
