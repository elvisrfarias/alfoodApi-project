import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import IRestaurante from '../../../interfaces/IRestaurante';

const FormularioRestaurante = () => {
  
  const [nomeRestaurante, setNomeRestaurante] = React.useState('')

  //Pegando o ID e solicitando para renderizar
  const parametros = useParams()
  React.useEffect(() => {
    if (parametros.id){
    axios.get<IRestaurante>(`http://localhost:8000/api/v2/restaurantes/${parametros.id}/`)
    .then(res => {
      setNomeRestaurante(res.data.nome)
    })
    }
  },[parametros.id]);


  const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) =>{
    evento.preventDefault()
    axios.post('http://localhost:8000/api/v2/restaurantes/',{
      nome: nomeRestaurante,
    })
      .then(() => {
        alert('Restaurante cadastrado com sucesso')
      })
  }
  return (
    <form onSubmit={aoSubmeterForm}>
      <TextField 
        value={nomeRestaurante} 
        id="standard-basic" 
        onChange={(evento) => setNomeRestaurante(evento.target.value)}
        label="Nome do restaurante" 
        variant="standard" 
      />
      <Button type='submit' variant="outlined">Salvar</Button>
    </form>
  )
}

export default FormularioRestaurante;
