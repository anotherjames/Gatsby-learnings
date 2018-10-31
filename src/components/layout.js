import React from "react"
import { css } from "react-emotion"
import { StaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

const ListLink = props => (
  <li  
    className={css`
      text-transform: capitalize;
    `}
  >
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        allFile(filter: {
          relativeDirectory: {
            eq: "pages"
          },
          name: {
            ne: "index"
          },
          extension: {
            ne: "md"
          }
        }) {
          edges {
            node {
              name
              relativeDirectory
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <div  
          className={css`
            margin: 0 auto;
            max-width: 800px;
            display: flex;
            flex-flow: row nowrap;
          `}
        >
          <header 
            className={css`
              padding: ${rhythm(1)};
              background-color: orange;
            `}
          >
            <Link to="/">
              <h3>{data.site.siteMetadata.title}</h3>
            </Link>
            <ul 
              className={css`
                list-style: none;
              `}
            >
              <ListLink to="/">Blog home</ListLink>
              {data.allFile.edges.map(({ node }, index) => (
                <ListLink to={`/${node.name}/`}>
                {node.name}</ListLink>
              ))}
            </ul>
          </header>
          <div 
            className={css`
              padding: ${rhythm(1)}
            `}
          >
            {children}
          </div>
        </div>
        <footer
          className={css`
            background-color: #ff4500;
            padding: ${rhythm(0.5)} ${rhythm(1)};
          `}
        >
          by James Williams
        </footer>
      </div>
    )}
  />
)
