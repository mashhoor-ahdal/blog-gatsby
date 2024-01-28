import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/Seo'


 const blog = () => {


  return (
    <Layout pageTitle="Blog">
      <div className='blog-content'>
       <p>Blog listings page</p>
</div>
    </Layout>
  )
}
export const Head = () => <Seo title="Blog"/>

export default blog;