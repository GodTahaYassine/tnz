import React from 'react'
import Status from '../components/home/Status'
import Posts from '../components/home/Posts'
import { useSelector } from 'react-redux'
import LoadIcon from '../images/loading.gif'

const Home = () => {
  const { homePosts } = useSelector(state => state)

  return (
    <div className='home row mx-0'>
        <div className='col-md-8'>
          <Status />
          {
            homePosts.loading
            ? <img src={LoadIcon} alt='Loading' className='d-block mx-auto' />
            :homePosts.result === 0
              ? <h2 className='text-center'>No Posts Available.</h2>
              : <Posts />
          } 
        </div>
        <div className='col-md-4'>

        </div>
    </div>
  )
}

export default Home