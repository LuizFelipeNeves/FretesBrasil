import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'

export default () => (
  <Layout>
      <div className="container ">
        <div className="col-12 mb-12 my-3 mt-4">
            <h5>Encontre as melhores ofertas de Fretes</h5>
        </div>
    </div>
      <div className="container-fluid mb-3 ">
        <form>
            <div className="col">
                <div className="col ml-5">
                    <Link href='/a' as='/b'><a>b</a></Link>
                    <Link href={{ pathname: '/fretes', query: { id: '2' } }} as='/fretes/2'><a>post #2</a></Link>
                </div>
            </div>
        </form>
    </div>
  </Layout>
)
