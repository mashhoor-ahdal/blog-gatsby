import React from 'react'
import Seo from './Seo';

const Home = ({heading,contents}) => {
  return (
    <div className='home-container'>
        <h1>
            {heading}
        </h1>
        <p>
            {contents}
        </p>

    </div>
  )
}
export const Head = () => <Seo title="Home Page" />;


export default Home