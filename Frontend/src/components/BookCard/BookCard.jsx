import { NavLink } from 'react-router-dom'
import './BookCard.css'

function BookCard({book}) {
   const {name,author,imageUrl} = book
  return (
   <div className="book-card">
    <img src={imageUrl} alt="no image" className='book-image' />
    <div className="book-details">
        <h3>{name}</h3>
        <p>{author}</p>
    </div>
    <div className="book-actions">
        <button className="updatebutton"><NavLink to={`/updatebook/${book._id}`} >Edit</NavLink></button>
        <button className="deletebutton"><NavLink to={`/deletebook/${book._id}`} >Delete</NavLink></button>
    </div>
   </div>
  )
}

export default BookCard;