import Router from 'next/router'
import nextCookie from 'next-cookies'
import Layout from '../components/layout'
import { withAuthSync, logout } from '../utils/auth'

const Profile = props => {
  //const { name, login, bio, avatarUrl } = props.data

  /*
 <img src={avatarUrl} alt='Avatar' />
      <h1>{name}</h1>
      <p className='lead'>{login}</p>
      <p>{bio}</p>
  
  */

  return (
    <Layout>
     <h1>Deu bom!</h1>
     <button onClick={logout}></button>
    </Layout>
  )
}

Profile.getInitialProps = async ctx => {
  const { token } = nextCookie(ctx)

    /* TODO: usar o token, recuperar informações
     sobre nivel de admin e renderizar tela correta.
     */

  const redirectOnError = () =>
    process.browser
      ? Router.push('/login')
      : ctx.res.writeHead(301, { Location: '/login' })

    // return redirectOnError()
}
export default withAuthSync(Profile)