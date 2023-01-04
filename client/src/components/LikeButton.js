import React from 'react'
import { useSelector } from 'react-redux'

const LikeButton = ({isLike, handleLike, handleUnLike}) => {
    const { theme } = useSelector(state => state )
  return (
    <>
        {
            isLike
            ? <i className='fas fa-heart text-danger mb-1' onClick={handleUnLike}
            style={{filter: theme ? 'invert(1)' : 'invert(0)', cursor: 'pointer'}} />
            : <i className='far fa-heart mb-1' onClick={handleLike} style={{cursor: 'pointer'}} />
        }

    </>
  )
}

export default LikeButton