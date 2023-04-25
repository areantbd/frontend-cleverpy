import { useEffect, useState } from "react"
import { Card } from "../components/Card"
import axios from "axios"
import { Link } from "react-router-dom"

interface Post {
  id: number,
  userId: number,
  title: string,
  body: string
}

export const PostsScreen = () => {
  const [posts, setPosts] = useState<Array<Post>>()
  
  const handleDeletePost = (id: number) => {
    setPosts(posts?.filter(post => post.id !== id))  
    //Petición para eliminar un post de la base de datos podría ser algo tipo: 
    //axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)  
  }

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err))
  }, [])

  return posts && posts.length > 1? (
    <div className="nav-shadow mt-1">
      <ul className="ms-5 d-flex text-light gap-2 list-unstyled">
        <Link to={'/'} className="text-decoration-none breadcrumbs"><li>Home <i className="fa fa-arrow-right"></i></li></Link>
        <li className="text-secondary">Posts</li>
      </ul>
      <div className="container d-flex gap-3 flex-wrap pt-3">
        {posts?.map((post) => (
          <div className="post-card-container"  key={post.id} >
            <button onClick={() => handleDeletePost(post.id)} className="btn btn-sm btn-outline-danger delete-button">X</button>
            <Card {...post}/>
          </div>
        ))}  
      </div>
    </div>
  ) : (
    <div className="nothing-to-see">
      <h1>Oops nothing to see here..</h1>
    </div>
  )
}