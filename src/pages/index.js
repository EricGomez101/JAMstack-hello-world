import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <h1>Hello my name is Eric Gomez</h1>
    <p>previous open surface miner now a self taught full stack web developer specializing on the MERN and LAMP stack's. </p>
    <p>you can find some of my work here:<br/>
      <a href='https://github.com/EricGomez101'>Github</a><br/>
      <a href='https://codepen.io/Eric_Gomez11011'>Codepen</a>
    </p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
