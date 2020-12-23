import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const MarkedHeader = styled.h1`
  display: inline;
`

const HeaderDate = styled.h3`
  margin-top: 5px;
  font-size: 20px;
  color: #606060;
`

// STYLE THE TAGS INSIDE THE MARKDOWN HERE
const MarkdownContent = styled.div`
  a {
    color: cornflowerBlue;
    font-size: 1em;
    text-decoration: none;
    position: relative;
    background-size: 0em 10%;
    background-position: 0 88%;
    
    transition: color 0.15s ease-in;
    &:hover {
    color: blue;
    transition: background-size 0.20s ease-in;
    background-image: linear-gradient(315deg, #b1bfd8 0%, #6782b4 74%); 
    background-repeat: no-repeat;
    background-size: 88% 10%;
    }
  }

  a > code:hover {
    text-decoration: underline;
  }
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Content>
        <MarkedHeader>{post.frontmatter.title}</MarkedHeader>
        <HeaderDate>
          {post.frontmatter.date} - {post.fields.readingTime.text}
        </HeaderDate>
        <MarkdownContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </Content>
      <Link to={"/blog"}>
        back
      </Link>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`