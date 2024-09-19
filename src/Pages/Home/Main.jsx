// import React from 'react'
import Nav from '../../Components/Nav'
import News from './News'
import Newsletter from '../../Components/Newsletter'
import Reviews from './Reviews'
import Getcard from '../../Components/Getcard'

function Main() {
  return (
    <div className=' pt-0'>   
<Nav/>


<Reviews/>
        <News/>
        <Newsletter/>
        <Getcard/>
    </div>
  )
}

export default Main