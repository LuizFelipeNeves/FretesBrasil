import React, { Component} from 'react'
import axios from 'axios'

import Link from 'next/link'
import Error from 'next/error';
//import fetch from 'isomorphic-unfetch';

import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css"; //for css

import Layout from '../components/layout'
import FretesList from '../components/fretesList'

const URL = 'https://fretesbrasil.herokuapp.com'

export default class Fretes extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      currentPage: (this.props.id || 1),
      totalPages: 1,
      data: [],
    }
    this.changeCurrentPage((this.props.id || 1))
  } 

  changeCurrentPage = page => {
    axios.post(URL + '/api/filtro/', { page }).then(resp => this.setState({
      currentPage: page,
      data: resp.data,
      totalPages: Math.ceil(resp.data.maxitens / resp.data.data.length)
    }))
};

  render () {
    return (
      <Layout>
        <div className="container ">
        <div className="col-12 mb-12 my-3 mt-4">
            <h5>Encontre as melhores ofertas de Fretes</h5>
            <div className="form-row">
                <div className="form-group-responsive sm-3 mr-2 mt-3">
                    <select className="form-control" id="selectEstado">
                        <option>Estado de Origem</option>
                        <option>São Paulo</option>
                    </select>
                </div>
                <div className="form-group sm-3 mr-5 mt-3">
                    <select className="form-control" id="selectCidade" >
                        <option>Cidade de Origem</option>
                        <option>Araraquara</option>
                        <option>Araras</option>
                        <option>Arco-Íris</option>
                        <option>Arealva</option>
                        <option>Areias</option>
                        <option>Areiópolis</option>
                        <option>Ariranha</option>
                        <option>Artur Nogueira</option>
                        <option>Arujá</option>
                        <option>Aspásia</option>
                        <option>Assis</option>
                        <option>Atibaia</option>
                        <option>Auriflama</option>
                        <option>Avaí</option>
                    </select>
                </div>
                <div className="form-group sm-3 mr-2 mt-3">
                    <select className="form-control" id="selectEstado">
                        <option>Estado de Destino</option>
                        <option>São Paulo</option>
                    </select>
                </div>
                <div className="form-group sm-3 mr-5 mt-3">
                    <select className="form-control" id="selectCidade">
                        <option>Cidade de Destino</option>
                        <option>Araraquara</option>
                        <option>Araras</option>
                        <option>Arco-Íris</option>
                        <option>Arealva</option>
                        <option>Areias</option>
                        <option>Areiópolis</option>
                        <option>Ariranha</option>
                        <option>Artur Nogueira</option>
                        <option>Arujá</option>
                        <option>Aspásia</option>
                        <option>Assis</option>
                        <option>Atibaia</option>
                        <option>Auriflama</option>
                        <option>Avaí</option>
                    </select>
                </div>
                <div className="col-sm-2 ml-auto mt-3">
                    <button type="submit" id="botao" className="btn ">Pesquisar</button>
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
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <a href="#">Carreta LS Trucada
                              <span className="badge  badge-pill">14</span></a>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <a href="#">Carreta Toco
                              <span className="badge  badge-pill">4</span></a>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <a href="#">Bitrem
                              <span className="badge  badge-pill">5</span></a>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <a href="#">Bi-Truck
                              <span className="badge badge-pill">10</span></a>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <a href="#">Truck
                              <span className="badge  badge-pill">88</span></a>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <a href="#">Carreta LS Trucada
                              <span className="badge  badge-pill">14</span></a>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <a href="#">Carreta Toco
                              <span className="badge  badge-pill">4</span></a>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <a href="#">Bitrem
                              <span className="badge badge-pill">5</span></a>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <a href="#">Bi-Truck
                              <span className="badge  badge-pill">10</span></a>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <a href="#">Truck
                              <span className="badge badge-pill">88</span></a>
                            </li>
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
                    <Link href='/a' as='/b'><a>b</a></Link>
                    <Link href={{ pathname: '/fretes', query: { id: '2' } }} as='/fretes/2'><a>post #2</a></Link>

                </div>
            </div>
        </form>
    </div>
      </Layout>
    )
  }
}