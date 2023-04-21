import {useState, useEffect} from 'react'
import axios from "axios";

interface Post {
  id: number,
  userId: number,
  title: string,
  body: string
}

export default function Test() {
  const [posts, setPosts] = useState<Array<Post>>()

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((error) => console.error(error))

  }, [])
  return (
    <>
      {posts?.map((post) => (
        <div className='' key={post.id}>
          <h3>{post.userId}: {post.title}</h3>
          <hr />
          <h4>{post.body}</h4>
        </div>
      ))}
    </>
  )
}
