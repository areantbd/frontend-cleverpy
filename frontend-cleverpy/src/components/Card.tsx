
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
      <div className="d-flex mt-auto mb-2 justify-content-between">
        <button className="btn btn-sm btn-outline-danger">Delete</button>
        <small className="d-block text-end mb-2 fw-lighter">Created by user: {props.userId}</small>
      </div>
      {/* <button className="btn btn-sm btn-outline-secondary">Edit post</button> */}      
    </div>
  )
}
