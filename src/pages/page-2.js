import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi Vansh Malhotra</h1>
    <p>Welcome to cbtproxy </p>
    <Link to="cbtproxy.com">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
