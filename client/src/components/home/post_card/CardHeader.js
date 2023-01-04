import React from 'react'
import Avatar from '../../Avatar'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import { GLOBALTYPES} from '../../../redux/actions/globalTypes'

const CardHeader = ({post}) => {
  const { auth } = useSelector(state => state)
  const dispatch = useDispatch()

  const handleEditPost = () => {
    dispatch({ type: GLOBALTYPES.STATUS, payload: {...post, onEdit: true} })
  }
  return (
    <div className='card_header'>
        <div className='d-flex'>
            <Avatar src={post.user.avatar} size="big-avatar" />
            <div className='card_name'>
                <h6 className='m-0'>
                    <Link to={`/profile/${post.user._id}`} className="text-dark link-ul">
                        {post.user.username}
                    </Link>
                </h6>
                <small className='text-muted'>
                    {moment(post.createdAt).fromNow()}
                </small>
            </div>
        </div>
        <div className='nav-item dropdown' style={{cursor: "pointer"}}>
            <span className="material-symbols-outlined" id="moreLink" data-bs-toggle="dropdown" >
                more_horiz
            </span>
            
            <div className='dropdown-menu dropdown-menu-end'>
                {
                    auth.user._id === post.user._id &&
                    <>
                        <div className='dropdown-item' onClick={handleEditPost}>
                            <span className="material-symbols-outlined">create</span> Edit Post
                        </div>
                        <div className='dropdown-item'>
                            <span className="material-symbols-outlined">delete_outline</span> Remove Post
                        </div>
                    </>
                }
                <div className='dropdown-item'>
                    <span className="material-symbols-outlined">content_copy</span> Copy Link
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardHeader