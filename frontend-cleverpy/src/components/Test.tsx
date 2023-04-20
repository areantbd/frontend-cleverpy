import React, {useState, useEffect} from 'react'
import axios from "axios";

export default function Test() {
  type Posts = {
    id: number,
    userId: number,
    title: string,
    body: string
  }
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((error) => console.error(error))

  }, [])
  return (
    <>
      {posts?.map((post) => (
        <>
          <h3>{post.userId}: {post.title}</h3>
          <hr />
          <h4>{post.body}</h4>
        </>
      ))}
    </>
  )
}
