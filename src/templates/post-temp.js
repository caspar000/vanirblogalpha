import React from 'react'
import { Link, graphql } from 'gatsby'

import Post from '../components/post'
import Layout from '../components/layout'

export default function Template({data}) {
  const post = data.markdownRemark

  return (
    <Layout>
      <Link to="/">Go Back</Link>
      <Post
      title={post.frontmatter.title}
      date={post.frontmatter.date}
      path={post.frontmatter.path}
      html={post.html}
      />
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath ($path: String!){
    markdownRemark(
      frontmatter: {path: {eq: $path}}
    ) {
      html
      frontmatter{
        path
        date
        title
      }
    }
  }
`
