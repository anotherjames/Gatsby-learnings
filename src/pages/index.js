import React from "react"
import { graphql } from "gatsby"
import { css } from "react-emotion"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import { Link } from "@reach/router";

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>Penguins are funny!</h1>
        <div>
          <img
            src="https://i.imgur.com/7vWQtb6.gif"
            alt="Group of penguins advancing"
          />
        </div>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3
              className={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              <Link 
                to={node.fields.slug}
                className={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >{node.frontmatter.title}{" "}</Link>
              <span
                className={css`
                  color: #bbb;
                `}
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {
      fields: [frontmatter___date], order: DESC 
    }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
