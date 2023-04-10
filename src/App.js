import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Time from './components/Time';

function App() {

const times = [
  {
    nome: 'Programador',
    corPrimaria: '#57C278',
    corSecundaria: '#D9F7E9'
  },

  {
    nome: 'Front-end',
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8F8FF'
  },

  {
    nome: 'Data Science',
    corPrimaria: '#A6D157',
    corSecundaria: '#F0F8E2'
  },

  {
    nome: 'Devops',
    corPrimaria: '#E06B69',
    corSecundaria: '#FDE7E8'
  },

  {
    nome: 'UX e Desingn',
    corPrimaria: '#DB6EBF',
    corSecundaria: '#FAE9F5'
  },

  {
    nome: 'Mobile',
    corPrimaria: '#FF8A05',
    corSecundaria: '#FFF5D9'
  },

  {
    nome: 'Inovação e Gestão',
    corPrimaria: '#FF8A29',
    corSecundaria: '#FFEEDF'
  }
]

const [colaboradores, setColaboradores] = useState([])

const aoNovoColaboradorAdicionado = (colaborador) => {
  debugger
  setColaboradores([...colaboradores, colaborador])
}

  return (
    <div className="App">
      <Banner/>
      <Form nomeDostimes={times.map(timeNome => timeNome.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}

        />)}
    </div>
  );
}

export default App;
