import React, { Component} from 'react'
import axios from 'axios'

import Link from 'next/link'
import Error from 'next/error';
//import fetch from 'isomorphic-unfetch';

import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css"; //for css

import Layout from '../components/layout'
import FretesList from '../components/fretesList'

const URL = 'https://fretesbrasil.herokuapp.com/api/filtro/'

export default class Fretes extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      currentPage: (this.props.match.params.id || 1),
      totalPages: 1,
      data: [],
    }
    this.changeCurrentPage((this.props.match.params.id || 1))
  } 

  changeCurrentPage = page => {
    axios.post(URL, { page }).then(resp => this.setState({
      currentPage: page,
      data: resp.data,
      totalPages: Math.ceil(resp.data.maxitens / resp.data.data.length)
    }))
};

  render () {
    return (
      <Layout>
        <h1>Fretes #{this.state.currentPage}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <FretesList data={this.state.data.data}/>
        <Pagination
          currentPage={this.props.currentPage}
          totalPages={this.state.totalPages}
          changeCurrentPage={this.changeCurrentPage}
          theme="bottom-border"
        />
      </Layout>
    )
  }
}