import React from "react"
import Img from 'gatsby-image'
import { graphql, StaticQuery, Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Latest Posts</h1>
    <div className="latest">
      <StaticQuery query={indexQuery} render={data => {
        return (
          data.allMarkdownRemark.edges.map(post => (
            <div key={post.id} className="card">
              <Link to={post.node.frontmatter.path} >
                <div>
                  <Img fluid={post.node.frontmatter.thumb.childImageSharp.fluid} alt={post.node.frontmatter.title} />
                </div>
                <div className="cardtitle">
                  <h1>{post.node.frontmatter.title}</h1>
                </div>
              </Link>
            </div>
          ))
        )
      }}/>
    </div>
  </Layout>
)

const indexQuery = graphql`
  query index{
    allMarkdownRemark (
      sort: {fields: [frontmatter___date], order: DESC},
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            path
            date
            thumb{
              childImageSharp{
                fluid(maxWidth: 800, maxHeight: 500){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
