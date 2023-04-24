
interface Post {
  id: number,
  userId: number,
  title: string,
  body: string,
}

export const Card = ({title, body, userId}: Post) => {
  return (
    <div className="d-flex flex-column  text-light rounded px-3 post-card">
      <h4 className="text-decoration-underline text-center mt-5">{title}</h4>
      <p className="mt-3 text-center text-truncate" contentEditable suppressContentEditableWarning={true}>{body}</p>
        <small className="d-block text-end mb-2 fw-lighter mt-auto ms-auto" >Created by user: {userId}</small>
    </div>
  )
}
