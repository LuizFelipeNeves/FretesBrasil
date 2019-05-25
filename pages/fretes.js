import React, { Component} from 'react'
import axios from 'axios'

import Link from 'next/link'
import Error from 'next/error';

import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css"; //for css

import Select from "react-select"; // https://react-select.com

import { stringify } from "query-string";

import Layout from '../components/layout'
import FretesList from '../components/fretesList'

const BASE = 'https://fretesbrasil.herokuapp.com'

const customStyles = {
  control: base => ({
    ...base,
    height: 45,
    minHeight: 45,
    width: 190,
  })
};

export default class Fretes extends Component {
  state = {
    currentPage: (this.props.id || 1),
    totalPages: 1,
    data: [],

    // filtros

    veiculo: false,
    veiculos: [],

    cidadeOrigem: false,
    cidadeODisable: true,
    cidadesO: [],

    estadoOrigem: false,
    estadosO: [],

    cidadeDestino: false,
    cidadeDDisable: true,
    cidadesD: [],

    estadoDestino: false,
    estadosD: [],

    error: null
  };

  changeCurrentPage = page => {
      const body = { page }
      if (this.state.veiculo) body.veiculo = this.state.veiculo;
      if (this.state.estadoOrigem.value) body.estadoorigem = this.state.estadoOrigem.value;
      if (this.state.cidadeOrigem.value) body.cidadeorigem = this.state.cidadeOrigem.value;
      if (this.state.estadoDestino.value) body.estadodestino = this.state.estadoDestino.value;
      if (this.state.cidadeDestino.value) body.cidadedestino = this.state.cidadeDestino.value;

      console.log(body)

      axios.post(BASE + '/api/filtro/', body).then(resp => this.setState({
        currentPage: page,
        data: resp.data,
        totalPages: Math.ceil(resp.data.maxitens / 20)
      }));
  }

  toggleEstadoO = estado => {
    if (this.state.estadoOrigem !== estado) {
      this.setState(
        {
          estadoOrigem: estado,
          cidadeOrigem: false,
          currentPage: 1,
        },
        this.EOrigem
      );
    }
  };

  toggleEstadoD = estado => {
    if (this.state.estadoDestino !== estado) {
      this.setState(
        {
          estadoDestino: estado,
          cidadeDestino: false,
          currentPage: 1,
        },
        this.EDestino
      );
    }
  };

  toggleCidadeO = cidade => {
    if (this.state.cidadeOrigem !== cidade)
      this.setState({ cidadeOrigem: cidade, currentPage: 1 }, this.COrigem);
  };
  toggleCidadeD = cidade => {
    if (this.state.cidadeDestino !== cidade)
      this.setState({ cidadeDestino: cidade, currentPage: 1 }, this.CDestino);
  };

  toggleVeiculo = veiculo => {
    if (this.state.veiculo !== veiculo) {
      this.setState({ veiculo: veiculo, currentPage: 1 }, this.AttVeiculos);
    }
  };

  async AttVeiculos() {
    await this.fetchEstadosO();
    if (this.state.estadoOrigem) await this.fetchCidadesO();
    await this.fetchEstadosD();
    if (this.state.estadoDestino) await this.fetchCidadesD();
    await this.fetchVeiculos();
    await this.changeCurrentPage(1);
  }

  async EOrigem() {
    await this.fetchEstadosD();
    await this.fetchCidadesO();
    await this.fetchVeiculos();
    await this.changeCurrentPage(1);
  }
  async EDestino() {
    await this.fetchEstadosO();
    await this.fetchCidadesD();
    await this.fetchVeiculos();
    await this.changeCurrentPage(1);
  }

  async COrigem() {
    await this.fetchEstadosD();
    await this.fetchVeiculos();
    await this.changeCurrentPage(1);
  }

  async CDestino() {
    await this.fetchEstadosO();
    await this.fetchVeiculos();
    await this.changeCurrentPage(1);
  }

  async fetchEstadosO() {
    let body = {};
    if (this.state.veiculo) body.veiculo = this.state.veiculo;
    if (this.state.estadoDestino.value)
      body.estadodestino = this.state.estadoDestino.value;
    if (this.state.cidadeDestino.value)
      body.cidadedestino = this.state.cidadeDestino.value;

    let URL = BASE + "/api/estadoso";
    if (stringify(body) !== "") URL += `?${stringify(body)}`;
    //console.log(URL);

    const data = await fetch(URL)
      .then(response => response.json())
      .catch(error => this.setState({ error }));

    this.setState({
      estadosO: data.data.map(estado => ({
        value: estado.nome,
        label: estado.nome
      }))
    });
  }

  async fetchEstadosD() {
    let body = {};
    if (this.state.veiculo) body.veiculo = this.state.veiculo;
    if (this.state.estadoOrigem.value) {
      body.estadoorigem = this.state.estadoOrigem.value;

      if (this.state.cidadeOrigem.value)
        body.cidadeorigem = this.state.cidadeOrigem.value;
    }

    let URL = BASE + "/api/estadosd";
    if (stringify(body) !== "") URL += `?${stringify(body)}`;
    //console.log(URL);

    const data = await fetch(URL)
      .then(response => response.json())
      .catch(error => this.setState({ error }));

    this.setState({
      estadosD: data.data.map(estado => ({
        value: estado.nome,
        label: estado.nome
      }))
    });
  }

  async fetchCidadesO() {
    let body = {};

    if (this.state.veiculo) body.veiculo = this.state.veiculo;
    if (this.state.estadoOrigem.value) {
      if (this.state.estadoDestino.value) {
        body.estadodestino = this.state.estadoDestino.value;
        if (this.state.cidadeDestino.value)
          body.cidadedestino = this.state.cidadeDestino.value;
      }
      body.estadoorigem = this.state.estadoOrigem.value;
      let URL = BASE + "/api/cidadeo";
      if (stringify(body) !== "") URL += `?${stringify(body)}`;
      //console.log(URL);

      const data = await fetch(URL)
        .then(response => response.json())
        .catch(error => this.setState({ error }));

      this.setState({
        cidadeODisable: false,
        cidadeOrigem: false,
        cidadesO: data.data.map(cidade => ({
          value: cidade,
          label: cidade
        }))
      });
    } else
      this.setState({
        cidadeODisable: true,
        cidadeOrigem: false,
        cidadesO: []
      });
  }

  async fetchCidadesD() {
    let body = {};
    if (this.state.veiculo) body.veiculo = this.state.veiculo;
    if (this.state.estadoDestino.value) {
      if (this.state.estadoOrigem.value) {
        body.estadoorigem = this.state.estadoOrigem.value;
        if (this.state.cidadeOrigem.value)
          body.cidadeorigem = this.state.cidadeOrigem.value;
      }
      body.estadodestino = this.state.estadoDestino.value;
      let URL = BASE + "/api/cidaded";
      if (stringify(body) !== "") URL += `?${stringify(body)}`;
      //console.log(URL);

      const data = await fetch(URL)
        .then(response => response.json())
        .catch(error => this.setState({ error }));

      this.setState({
        cidadeDDisable: false,
        cidadeDestino: false,
        cidadesD: data.data.map(cidade => ({
          value: cidade,
          label: cidade
        }))
      });
    } else
      this.setState({
        cidadeDDisable: true,
        cidadeDestino: false,
        cidadesD: []
      });
  }

  async fetchVeiculos() {
    let body = {};
    if (this.state.veiculo) body.veiculo = this.state.veiculo;
    if (this.state.estadoOrigem.value)
      body.estadoorigem = this.state.estadoOrigem.value;
    if (this.state.cidadeOrigem.value)
      body.cidadeorigem = this.state.cidadeOrigem.value;

    if (this.state.estadoDestino.value)
      body.estadodestino = this.state.estadoDestino.value;

    if (this.state.cidadeDestino.value)
      body.cidadedestino = this.state.cidadeDestino.value;

    let URL = BASE + "/api/veiculos";
    if (stringify(body) !== "") URL += `?${stringify(body)}`;
    //console.log(URL);

    const data = await fetch(URL)
      .then(response => response.json())
      .catch(error => this.setState({ error }));

    this.setState({ veiculos: data.data });
  }

  componentDidMount() {
    this.changeCurrentPage((this.props.id || 1))
    this.fetchEstadosO();
    this.fetchEstadosD();
    this.fetchVeiculos();
  }

  

  render () {
    const {
      veiculo,
      veiculos,
      estadosO,
      cidadesO,
      estadosD,
      cidadesD,
      estadoOrigem,
      cidadeOrigem,
      estadoDestino,
      cidadeDestino,
      cidadeODisable,
      cidadeDDisable,
    } = this.state;
    
    if (!estadosO[0] || !estadosD[0]) {
      return <div>Carregando...</div>;
    }

    return (
      <Layout>
        <div className="container ">
        <div className="col-12 mb-12 my-3 mt-4">
            <h5>Encontre as melhores ofertas de Fretes</h5>
            <div className="form-row">
                <div className="form-group-responsive sm-3 mr-2 mt-3">
                  <Select
                    className="basic-single"
                    placeholder="Estado de Origem"
                    value={estadoOrigem}
                    onChange={this.toggleEstadoO}
                    name="estadoOrigem"
                    isSearchable={true}
                    options={[{ label: "Todos", value: false }, ...estadosO]}
                    styles={customStyles}
                  />
                </div>
                <div className="form-group sm-3 mr-5 mt-3">
                    <Select
                    className="basic-single"
                    placeholder="Cidade de Origem"
                    onChange={this.toggleCidadeO}
                    value={cidadeOrigem}
                    name="cidadeOrigem"
                    isDisabled={cidadeODisable}
                    isSearchable={true}
                    options={[{ label: "Todos", value: false }, ...cidadesO]}
                    styles={customStyles}
                  />
                </div>
                <div className="form-group sm-3 mr-2 mt-3">
                    <Select
                      className="basic-single"
                      placeholder="Estado de Destino"
                      onChange={this.toggleEstadoD}
                      value={estadoDestino}
                      name="estadoDestino"
                      isSearchable={true}
                      options={[{ label: "Todos", value: false }, ...estadosD]}
                      styles={customStyles}
                    />
                </div>
                <div className="form-group sm-3 mr-5 mt-3">
                    <Select
                    className="basic-single"
                    placeholder="Cidade de Destino"
                    onChange={this.toggleCidadeD}
                    value={cidadeDestino}
                    name="cidadeDestino"
                    isDisabled={cidadeDDisable}
                    isSearchable={true}
                    options={[{ label: "Todos", value: false }, ...cidadesD]}
                    styles={customStyles}
                  />
                </div>
            </div>
        </div>
    </div>
      <div className="container-fluid mb-3 ">
        <form>
            <div className="form-row">
                <div className="container-3">
                    <div className="col">
                        <ul className="list-group">
                        {veiculo ? (<li style={{ color: "red" }} key={veiculo} className='list-group-item d-flex justify-content-between align-items-center'>
                            <a onClick={() => this.toggleVeiculo(false)}>{veiculo}</a>{" "}
                          </li>) : ("")}
                        

                        <li key="Total" className='list-group-item d-flex justify-content-between align-items-center'>
                          <a onClick={() => this.toggleVeiculo(false)}>Total</a>{" "}
                          {/*veiculototal*/}
                        </li>

                          {veiculos.map(veic => {
                            if (veiculo !== veic.nome)
                              return (
                                <li
                                  //style={veiculo === veic.nome ? { color: "red" } : {}}
                                  //className={veiculo === veic.nome ? "active" : ""}
                                  className='list-group-item d-flex justify-content-between align-items-center'
                                  key={veic.nome}
                                >
                                  <a onClick={() => this.toggleVeiculo(veic.nome)}>
                                    {veic.nome} - <span className="badge  badge-pill badge-secondary">{veic.total}</span>
                                  </a>
                                </li>
                              );
                            return null;
                          })}
                        </ul>
                    </div>
                </div>

                <div className="col ml-5">
                   <FretesList data={this.state.data.data}/>
                    <Pagination
                      currentPage={this.state.currentPage}
                      totalPages={this.state.totalPages}
                      changeCurrentPage={this.changeCurrentPage}
                      theme="bottom-border"
                    />

                    {
                      /*
                      <Link href='/a' as='/b'><a>b</a></Link>
                      <Link href={{ pathname: '/fretes', query: { id: '2' } }} as='/fretes/2'><a>post #2</a></Link>

                      */
                    }
                    

                </div>
            </div>
        </form>
    </div>
      </Layout>
    )
  }
}