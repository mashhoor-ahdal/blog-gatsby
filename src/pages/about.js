import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/Seo'
const AboutPage = () => {
  return (
  <>
    <Layout pageTitle={"About"}>
    
    <div >
        <h2>
            My Name is Mashhoor Ahdal
        </h2>
        <p>
          
            Btech Computer Science Student 
        </p>

    </div>
  
    </Layout>
  </>
  )
}

export const Head = () => <Seo title="About"/>

export default AboutPage