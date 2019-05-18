import React from 'react';
import { Table } from 'reactstrap';

export default props => {
  const renderRows = () => {
    const data = props.data || []
    return data.map(frete => (
      <tr key={frete._id}>
        <td>{frete._id}</td>
        <td>{frete.cidadeorigem}/{frete.estadoorigem}</td>
        <td>{frete.cidadedestino}/{frete.estadodestino}</td>
        <td>{frete.peso}</td>
        <td>{frete.preco}</td>
        <td>{frete.veiculo.join(', ')}</td>
      </tr> 
    ))
  }
  return (
    <Table hover id='tabela'>
        <thead>
          <tr>
            <th>#</th>
            <th>Origem</th>
            <th>Destino</th>
            <th>Peso</th>
            <th>Preço</th>
            <th>Veículo</th>
          </tr>
        </thead>
        <tbody>
            {renderRows()}
        </tbody>
      </Table>
  )
}