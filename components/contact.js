import React, { Component} from 'react'
import axios from 'axios'
import Select from "react-select"; // https://react-select.com

import { stringify } from "query-string";

const BASE = 'https://fretesbrasil.herokuapp.com'

const customStyles = {
  control: base => ({
    ...base,
    height: 45,
    minHeight: 45,
    width: 190,
  })
};

export default class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            Nome: '',
            Sobrenome: '',
            Email: '',
            Telefone: '',
            Assunto: false,
            Mensagem: '',
        };
        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeSobrenome = this.onChangeSobrenome.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAssunto = this.onChangeAssunto.bind(this);
        this.onChangeTelefone = this.onChangeTelefone.bind(this);   
        this.onChangeMSG = this.onChangeMSG.bind(this);
        this.enviarform = this.enviarform.bind(this);
    }

    enviarform(evt) {
        evt.preventDefault();
        alert('Your nome: ' + this.state.Nome);
        this.state = {
            Nome: '',
            Sobrenome: '',
            Email: '',
            Telefone: '',
            Assunto: false,
            Mensagem: '',
        };
    };

    onChangeNome(evt) {
        if (this.state.Nome !== evt.target.value) this.setState({ Nome: evt.target.value });
    };
    onChangeSobrenome(evt) {
        if (this.state.Sobrenome !== evt.target.value) this.setState({ Sobrenome: evt.target.value });
    };
    onChangeEmail(evt) {
        if (this.state.Email !== evt.target.value) this.setState({ Email: evt.target.value });
    };
    onChangeTelefone(evt) {
        if (this.state.Telefone !== evt.target.value) this.setState({ Telefone: evt.target.value });
    };
    onChangeAssunto(selected) {
        if (this.state.Assunto !== selected) this.setState({ Assunto: selected });
    };
    onChangeMSG(evt) {
        if (this.state.Mensagem !== evt.target.value) this.setState({ Mensagem: evt.target.value });
    };

  render () {
    const {
        Nome,
        Sobrenome,
        Email,
        Telefone,
        Assunto,
        Mensagem
    } = this.state;

       
    const options = [
        { value: 'Tenho cargas, busco caminhoneiros', label: 'Tenho cargas, busco caminhoneiros' },
        { value: 'Tenho caminhão, busco fretes', label: 'Tenho caminhão, busco fretes' },
        { value: 'Sobre o Carretos e Mudanças Online', label: 'Sobre o Carretos e Mudanças Online' },
        { value: 'Suporte técnico', label: 'Suporte técnico' },
        { value: 'Interesse em Parcerias', label: 'Interesse em Parcerias' },
        { value: 'Quero anunciar no Fretes Brasil', label: 'Quero anunciar no Fretes Brasil' },
        { value: 'Outros', label: 'Outros' }
      ];

    return (
        <div className="container" id="contato">
        <div className="row">
            <div className="col-12 text-center my-5">
                <h1 className="display-4"><i className="fas fa-comments text-dark"></i>Contato</h1>
            </div>
        </div>
        <div className="row justify-content-center mb-5">
            <div className="col-sm-12 col-md-10 col-lg-8">
                <form onSubmit={this.enviarform}>
                    <div className="form-row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="inputNome">Nome</label>
                            <input type="text" required="required" value={Nome} onChange={this.onChangeNome} className="form-control" id="inputNome" placeholder="Ex: João" pattern="[a-zA-Z\u00C0-\u00FF ]{1,}$" />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="inputSobrenome">Sobrenome</label>
                            <input type="text" required="required" value={Sobrenome} onChange={this.onChangeSobrenome} className="form-control" id="inputSobrenome" placeholder="Ex: Silva" pattern="[a-zA-Z\u00C0-\u00FF ]{1,}$" />
                        </div>
                    </div>
    
                    <div className="form-row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="inputEmail">E-mail</label>
                            <input type="email" required="required" value={Email} onChange={this.onChangeEmail} className="form-control" id="inputEmail" placeholder="nome@exemplo.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                            <small id="emailHelp" className="form-text text-muted">Nós nunca vamos compartilhar seu e-mail com mais ninguém.</small>
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="inputTelefone">Telefone</label>
                            <input type="tel" required="required" value={Telefone} onChange={this.onChangeTelefone} className="form-control" maxLength="15" id="inputTelefone" placeholder="Ex: (12)94002-8922" pattern="\([0-9]{2}\)[0-9]{4,6}-[0-9]{3,4}$" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-sm-12">
                            <label id="selectAssunto" required htmlFor="selectAssunto">Assunto</label>
                            <Select
                                placeholder='Selecione...'
                                value={Assunto}
                                onChange={this.onChangeAssunto}
                                options={options}
                                styles={customStyles}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputMensagem">Mensagem</label>
                        <textarea className="form-control" required="required" id="inputMensagem" rows="3" value={Mensagem} onChange={this.onChangeMSG}></textarea>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-sm-12">
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" /> Desejo receber novidades por e-mail
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-sm-12">
                            <button type="submit" className="btn btn-dark">Enviar</button>
                            <input type="reset" className="btn btn-outline-dark" value="Limpar" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
  }
}