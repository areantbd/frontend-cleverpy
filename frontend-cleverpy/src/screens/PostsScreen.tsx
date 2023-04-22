import { useEffect, useState } from "react"
import { Card } from "../components/Card"
import axios from "axios"

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
  }

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err))
  }, [])

  return posts && posts.length > 1? (
    <div className="container d-flex gap-3 flex-wrap mt-5">      
      {posts?.map((post) => (
        <div className="post-card-container"  key={post.id} >
          <button onClick={() => handleDeletePost(post.id)} className="btn btn-sm btn-outline-danger delete-button">X</button>
          <Card {...post}/>
        </div>
      ))}  
    </div>
  ) : (
    <div className="nothing-to-see">
      <h1>Oops nothing to see here..</h1>
    </div>
  )
}