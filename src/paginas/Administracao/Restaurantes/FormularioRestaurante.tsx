import axios from "axios"
import { useParams } from "react-router-dom"
import { Button, TextField, Typography, Box } from "@mui/material"
import { useEffect, useState } from "react"
import IRestaurante from "../../../interfaces/IRestaurante"

const FormularioRestaurante = () => {

    const [nomeRestaurante, setNomeRestaurante] = useState('')
    const parametros = useParams()

    useEffect(() => {
        if (parametros.id) {
            axios.get<IRestaurante>(`http://localhost:8000/api/v2/restaurantes/${parametros.id}/`)
                .then(resposta => setNomeRestaurante(resposta.data.nome))
        }
    }, [parametros])

    // Submissão do form com condições
    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        if (parametros.id) {
            axios.put(`http://localhost:8000/api/v2/restaurantes/${parametros.id}/`, {
                nome: nomeRestaurante
            })
                .then(() => {
                    alert("Restaurante atualizado com sucesso!")
                })
        } else {
            axios.post('http://localhost:8000/api/v2/restaurantes/', {
                nome: nomeRestaurante
            })
                .then(() => {
                    alert("Restaurante cadastrado com sucesso!")
                })
        }
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography component='h1' variant='h6' sx={{ textAlign: 'right' }}>Formulário de restaurante</Typography>
            <Box component='form' onSubmit={aoSubmeterForm} >
                <TextField
                    value={nomeRestaurante}
                    onChange={evento => setNomeRestaurante(evento.target.value)}
                    label="Nome do Restaurante"
                    variant="standard"
                    fullWidth
                    required
                />
                <Button sx={{ marginTop: 2 }} type="submit" fullWidth variant="outlined">Salvar</Button>
            </Box>
        </Box>
    )
}

export default FormularioRestaurante