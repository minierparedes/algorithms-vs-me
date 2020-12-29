/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import Footer from "./Footer";
import Header from "./header";
import "./layout.css";
import "../components/css/custom.css";


const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="site-content">
        <Header siteTitle={"Minierparedes"} />
        <Content>
          <main>{children}</main>
        </Content>
        <Footer />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout