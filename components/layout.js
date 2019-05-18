import Head from 'next/head'
import Footer from './footer'
import Header from './header'

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all'
import '../estilo.css'

export default ({ children, titulo = 'FRETES BRASIL' }) => (
  <div>
    <Head>
      <title>{titulo}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link href="/static/estilo.css" rel="stylesheet" />
    </Head>
    <Header/>
    {children}
    <Footer/>
  </div>
)
