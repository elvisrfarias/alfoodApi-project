import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from 'react'
import axios from 'axios';

const FormularioRestaurante = () => {
  const [nomeRestaurante, setNomeRestaurante] = React.useState('')

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

export default FormularioRestaurante
