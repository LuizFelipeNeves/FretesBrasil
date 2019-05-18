import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'

export default () => (
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
                    <select className="form-control" id="selectCidade">
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
                    <table id="tabela" className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Origem</th>
                                <th scope="col">Destino</th>
                                <th scope="col">Veículo</th>
                                <th scope="col">Carroceria</th>

                            </tr>
                        </thead>
                        <tbody>
                                <tr onclick="window.alert('Jovem já pode ir pro RH')">
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>

                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item pag">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <Link href='/a' as='/b'><a>b</a></Link>
                    <Link href={{ pathname: '/fretes', query: { id: '2' } }} as='/fretes/2'><a>post #2</a></Link>

                </div>
            </div>
        </form>
    </div>
  </Layout>
)
