import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo=({title})=>{
    const data = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                title
            }
        }
    }
    `)

    return (
    <>
        <title>{data.site.siteMetadata.title} | {title}</title>
        <link rel="icon" href="src\images\Logo.png"></link>

        </>
    );
}

export default Seo;

