import React, { Component } from "react";
import axios from 'axios'
import Layout from "../components/layout";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sessao } from "../utils/auth";

toast.configure({
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    });

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Email: '',
      Senha: '',
      toastErr: null,
      toastSucess: null
    };
    this.enviarform = this.enviarform.bind(this);
  }
  atualizaEmail = (evt) => this.setState({Email: evt.target.value.toLowerCase()});
  atualizaSenha = (evt) => this.setState({Senha: evt.target.value});
  enviarform(evt) {
    evt.preventDefault();
    const body = {
        email: this.state.Email,
        password: this.state.Senha,
    }
    axios.post('/api/auth/autenticacao', body)
      .then((response) => sessao(response.data.token)) //sessao
      // FIXME: Bug Axios console.log error
      .catch((error) => {
        if (! toast.isActive(this.toastErr)) this.toastErr = toast.error('⚠️' + error.response.data.error)
      });
};
  // TOOD: LoginHelp 
  render() {
    return (
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Login</h5>
                  <form onSubmit={this.enviarform} className="form-signin">
                    <div className="form-label-group">
                      <label htmlFor="inputEmail">Email</label>
                      <input
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email address"
                        value={this.state.Email} 
                        onChange={this.atualizaEmail}
                        required
                        autoFocus
                      />
                    </div>

                    <div className="form-label-group mb-3">
                      <label htmlFor="inputPassword">Senha</label>
                      <input
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        value={this.state.Senha} 
                        onChange={this.atualizaSenha} 
                        required
                      />
                    </div>

                    <div className="custom-control custom-checkbox mb-3">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label className="custom-control-label" htmlFor="customCheck1">
                        Lembrar Senha
                      </label>
                      <a disabled href="#" id="s" className="ml-5 text-dark">
                        Esqueci minha senha
                      </a>
                    </div>
                    <button
                      className="btn btn-lg btn-dark btn-block text-uppercase mb-3"
                      type="submit"
                    >
                      Entrar
                    </button>
                  </form>
                  <a
                    className="btn btn-dark btn-block btn-lg"
                    href="/cadastro"
                    role="button"
                  >
                    CADASTRAR
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Login;
