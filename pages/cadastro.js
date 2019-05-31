import React, { Component } from "react";
import axios from "axios";
import Layout from "../components/layout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sessao } from "../utils/auth";

toast.configure({
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true
});

export class Cadastro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      toastErr: null,
      toastSucess: null
    };
    this.enviarform = this.enviarform.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }
  atualizaPNome = evt => this.setState({ first_name: evt.target.value });
  atualizaUNome = evt => this.setState({ last_name: evt.target.value });
  atualizaEmail = evt =>
    this.setState({ email: evt.target.value.toLowerCase() });
  atualizaSenha = evt => this.setState({ password: evt.target.value });
  
  clearForm() {
    this.setState({ first_name: '', last_name: '', email: '', password: '' });
}

  enviarform(evt) {
    evt.preventDefault();
    const body = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post("/api/auth/cadastro", body)
      .then(response => sessao(response.data.token))
      .catch(error => {
        // FIXME: Bug Axios console.log error
        if (!toast.isActive(this.toastErr))
          this.toastErr = toast.error("⚠️" + error.response.data.error);
      });
  }
  render() {
    return (
      <Layout>
        <div className="container" id="contato">
          <div className="row">
            <div className="col-12 text-center my-5">
              <h1 className="display-4">
                <i /> Cadastro
              </h1>
            </div>
          </div>
          <div className="row justify-content-center mb-5">
            <div className="col-sm-12 col-md-10 col-lg-8">
              <form onSubmit={this.enviarform} onReset={this.clearForm}>
                <div className="form-row">
                  <div className="form-group col-sm-6">
                    <label htmlFor="inputNome">Primeiro nome</label>
                    <input
                      type="text"
                      required="required"
                      className="form-control"
                      id="inputNome"
                      placeholder="Ex: João"
                      pattern="[a-zA-Z\u00C0-\u00FF ]{1,}$"
                      valeu={this.state.first_name}
                      onChange={this.atualizaPNome}
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <label htmlFor="inputSobrenome">Sobrenome</label>
                    <input
                      type="text"
                      required="required"
                      className="form-control"
                      id="inputSobrenome"
                      placeholder="Ex: Silva"
                      pattern="[a-zA-Z\u00C0-\u00FF ]{1,}$"
                      valeu={this.state.last_name}
                      onChange={this.atualizaUNome}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-sm-6">
                    <label htmlFor="inputEmail">Seu e-mail</label>
                    <input
                      type="email"
                      required="required"
                      className="form-control"
                      id="inputEmail"
                      placeholder="nome@exemplo.com"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      valeu={this.state.email}
                      onChange={this.atualizaEmail}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      Nós nunca vamos compartilhar seu e-mail com mais ninguém.
                    </small>
                  </div>
                  <div className="form-label-group">
                    <label htmlFor="inputPassword">Senha</label>
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Crie sua Senha"
                      valeu={this.state.password}
                      onChange={this.atualizaSenha}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-sm-12">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" />{" "}
                        Desejo receber novidades por e-mail
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-sm-12">
                    <button type="submit" className="btn btn-dark">
                      Cadastrar
                    </button>
                    <input
                      type="reset"
                      className="btn btn-outline-dark"
                      value="Limpar"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Cadastro;
