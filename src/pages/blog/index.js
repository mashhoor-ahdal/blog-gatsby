import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/Seo'
import {blogs_container} from './index.module.css'
const BlogPage = ({ data }) => {
  
  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.map(node => (
          <div key={node.id} className={blogs_container} >
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            
          </div>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage