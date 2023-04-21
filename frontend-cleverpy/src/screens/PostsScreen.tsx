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

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div className="container d-flex gap-3 flex-wrap mt-5">
      {posts?.map((post) => (
        <Card {...post} key={post.id}/>
      ))}
    </div>
  )
}
