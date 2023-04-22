
interface Post {
  id: number,
  userId: number,
  title: string,
  body: string,
}

export const Card = (props: Post) => {
  return (
    <div className="d-flex flex-column bg-dark text-light rounded shadow px-3 post-card">
      <h4 className="text-decoration-underline text-center mt-5">{props.title}</h4>
      <p className="mt-3 text-center text-truncate" contentEditable>{props.body}</p>
        <small className="d-block text-end mb-2 fw-lighter mt-auto ms-auto" >Created by user: {props.userId}</small>
      {/* <button className="btn btn-sm btn-outline-secondary">Edit post</button> */}      
    </div>
  )
}
