import * as React from 'react'
import Layout from '../components/layout'


 const about = () => {
  return (
    <Layout pageTitle="About Page">
        <p>My name is Mashhoor Ahdal</p>
    </Layout>
  )
}
export const Head = () => <>
            <title>About Me</title>
            <meta name="description" content="Mashhoor Ahdal personal blog" />

</>

export default about;