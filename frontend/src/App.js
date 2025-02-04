import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [peopleApi01, setPeopleApi01] = useState([]); // Estado para /api01
  const [peopleApi02, setPeopleApi02] = useState([]); // Estado para /api02

  useEffect(() => {
    // Buscar dados de /api01
    axios
      .get('/api01')
      .then((res) => setPeopleApi01(res.data))
      .catch((error) => console.error('Erro ao buscar dados da API01:', error));

    // Buscar dados de /api02
    axios
      .get('/api02')
      .then((res) => setPeopleApi02(res.data))
      .catch((error) => console.error('Erro ao buscar dados da API02:', error));
  }, []);

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Dados das APIs</h1>

      <div style={{ margin: '20px 0' }}>
        <h2>Dados da API01</h2>
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr>
              <th style={{ padding: '8px', backgroundColor: '#f2f2f2' }}>ID</th>
              <th style={{ padding: '8px', backgroundColor: '#f2f2f2' }}>Nome</th>
              <th style={{ padding: '8px', backgroundColor: '#f2f2f2' }}>Idade</th>
            </tr>
          </thead>
          <tbody>
            {peopleApi01.map((person, index) => (
              <tr key={index}>
                <td style={{ padding: '8px' }}>{person.id}</td>
                <td style={{ padding: '8px' }}>{person.name}</td>
                <td style={{ padding: '8px' }}>{person.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h2>Dados da API02</h2>
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr>
              <th style={{ padding: '8px', backgroundColor: '#f2f2f2' }}>ID</th>
              <th style={{ padding: '8px', backgroundColor: '#f2f2f2' }}>Nome</th>
              <th style={{ padding: '8px', backgroundColor: '#f2f2f2' }}>Idade</th>
            </tr>
          </thead>
          <tbody>
            {peopleApi02.map((person, index) => (
              <tr key={index}>
                <td style={{ padding: '8px' }}>{person.id}</td>
                <td style={{ padding: '8px' }}>{person.name}</td>
                <td style={{ padding: '8px' }}>{person.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
