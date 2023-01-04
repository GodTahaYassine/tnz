import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteComment } from '../../../redux/actions/commentAction'

const CommentMenu = ({post, comment, setOnEdit}) => {
  
  const { auth } = useSelector(state => state)
  const dispatch = useDispatch()

  const handleRemove = () => {
    if(post.user._id === auth.user._id || comment.user._id === auth.user._id){
      dispatch(deleteComment({post, auth, comment}))
    }
  }

  const MenuItem = () => {
    return(
      <>
        <div className="dropdown-item d-flex flex-row" onClick={() => setOnEdit(true)} >
          <span className="material-symbols-outlined"> create</span> 
          <label >Edit</label>
        </div>

        <div className="dropdown-item d-flex flex-row" onClick={handleRemove} >
          <span className="material-symbols-outlined"> delete</span>
          <label >Remove</label>
        </div>
      </>
    )
  }
  return (
    <div className='menu'>
      {
        (post.user._id === auth.user._id || comment.user._id === auth.user._id) &&
        <div className='nav-item dropdown '>
          <span className='material-symbols-outlined' id="moreLink" data-bs-toggle="dropdown">
            more_vert
          </span>

          <div className='dropdown-menu' aria-labelledby='moreLink'>
            {
              post.user._id === auth.user._id
              ? comment.user._id === auth.user._id
                ?MenuItem()
                :<div className="dropdown-item" onClick={handleRemove} >
                    <span className="material-symbols-outlined"> delete</span> Remove
                </div>
              : comment.user._id === auth.user._id && MenuItem()
            }

          </div>

        </div>
      }
    </div>
  )
}

export default CommentMenu