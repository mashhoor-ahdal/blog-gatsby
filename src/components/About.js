import * as React from 'react'
import Seo from '../components/Seo'

const About = ({heading,bio}) => {
  return (
    
    <div className='about-container'>
      <h2>{heading}</h2>
      <p>
        {bio}
      </p>
      </div>
    
  )
}

export const Head = () => <Seo title="About"/>

export default About;