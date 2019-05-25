import React from 'react';
import { Table } from 'reactstrap';

export default props => {
  const renderRows = () => {
    const data = props.data || []
    return data.map(frete => (
      <tr key={frete._id} onClick={()=> window.open(frete.url, "_blank")}>
        <td>{frete.cidadeorigem}/{frete.estadoorigem}</td>
        <td>{frete.cidadedestino}/{frete.estadodestino}</td>
        <td>{frete.veiculo.join(', ')}</td>
        <td>{frete.carroceria.join(', ')}</td>
        <td>{frete.peso}</td>
        <td>{frete.preco}</td>
      </tr> 
    ))
  }
  return (
    <Table hover id='tabela'>
        <thead>
          <tr>
            <th>Origem</th>
            <th>Destino</th>
            <th>Veículo</th>
            <th>Carroceria</th>
            <th>Peso</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
            {renderRows()}
        </tbody>
      </Table>
  )
}