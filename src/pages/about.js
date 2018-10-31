import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <div>
      <h1>About {data.site.siteMetadata.title}</h1>
      <h3>{data.site.siteMetadata.subtitle}</h3>
      <p>I’m going about things my own way.</p>
    </div>
  </Layout>
)

export const steve = graphql`
  query {
    site {
      siteMetadata {
        subtitle,
        title
      }
    }
  }
`
