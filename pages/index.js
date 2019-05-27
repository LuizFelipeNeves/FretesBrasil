import React from 'react'
import Head from 'next/head'
//import Link from 'next/link'
import Layout from '../components/layout'
import Carousel from '../components/carousel'
import About from '../components/about'
import Contact from '../components/contact'

export default () => (
  <div>
  <Head>
  {/* 
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/prop-types/15.6.1/prop-types.min.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/react/16.3.2/umd/react.production.min.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/react-dom/16.3.2/umd/react-dom.production.min.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/react-transition-group/2.2.1/react-transition-group.min.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/react-popper/0.10.4/umd/react-popper.min.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/reactstrap/6.0.1/reactstrap.min.js"></script>
  */}
  </Head>
  <Layout>  
    {/*
    <Link href='/a' as='/b'><a>b</a></Link>
    <Link href={{ pathname: '/fretes', query: { id: '2' } }} as='/fretes/2'><a>post #2</a></Link>
    */}
    <Carousel/>
    <About/>
    <Contact/>
  </Layout>
  </div>
)
