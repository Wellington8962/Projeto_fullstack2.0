import React, { useState, useEffect } from 'react';
import './App.css'; 

const App = () => {
  const [csvData, setCsvData] = useState([]);
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    // Função para buscar dados CSV
    const fetchCsvData = async () => {
      try {
        const response = await fetch('http://localhost:8000/mostrar_dados_csv');
        const data = await response.json();
        setCsvData(data);
      } catch (error) {
        console.error('Erro ao buscar dados CSV:', error);
      }
    };

    // Função para buscar dados JSON
    const fetchJsonData = async () => {
      try {
        const response = await fetch('http://localhost:8000/mostrar_dados_json');
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error('Erro ao buscar dados JSON:', error);
      }
    };

    fetchCsvData();
    fetchJsonData();
  }, []);

  return (
    <div className="container">
      <div className="table-container">
        <h2>Dados CSV</h2>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Bairro</th>
              <th>Quartos</th>
              <th>Valor</th>
              <th>Condomínio</th>
              <th>IPTU</th>
            </tr>
          </thead>
          <tbody>
            {csvData.map((row, index) => (
              <tr key={index}>
                <td>{row.tipo}</td>
                <td>{row.bairro}</td>
                <td>{row.quartos}</td>
                <td>{row.valor}</td>
                <td>{row.condominio}</td>
                <td>{row.iptu}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  
      <div className="table-container">
        <h2>Dados JSON</h2>
        <table className="custom-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Idade</th>
            </tr>
          </thead>
          <tbody>
            {jsonData.map((person, index) => (
              <tr key={index}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>  
  );
  
};

export default App;
