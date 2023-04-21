
interface Post {
  id: number,
  userId: number,
  title: string,
  body: string
}

export const Card = (props: Post) => {
  return (
    <div className="d-flex flex-column bg-dark text-light rounded shadow px-3 post-card">
      <h4 className="text-decoration-underline text-center mt-2">{props.title}</h4>
      <p className="mt-3 text-center ">{props.body}</p>
      <small className="d-block text-end mb-2 mt-auto">Created by user: {props.userId}</small>
    </div>
  )
}
