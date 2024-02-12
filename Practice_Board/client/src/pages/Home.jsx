import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container'>
        <h1>Home</h1>
        <Link to="/board">게시판</Link>
    </div>
  )
}

export default Home