import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'

export default () => (
  <Layout>
      <div className="container-fluid mb-3 ">
        <form>
            <div className="form-row">
                <div className="col ml-5">
                    <Link href='/a' as='/'><a>Home</a></Link>
                    <Link href={{ pathname: '/fretes', query: { id: '2' } }} as='/fretes/2'><a>fretes #2</a></Link>
                </div>
            </div>
        </form>
    </div>
  </Layout>
)