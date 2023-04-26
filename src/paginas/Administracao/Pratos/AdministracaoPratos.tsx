import { Button, Link, Paper, TableContainer, Table, TableBody, TableRow, TableCell, TableHead } from "@mui/material"
import { useEffect, useState } from "react"
import { Link as RouterLink } from "react-router-dom"
import IRestaurante from "../../../interfaces/IRestaurante"
import http from "../../../http"
import IPrato from "../../../interfaces/IPrato"

const AdministracaoPratos = () => {

    const [pratos, setPratos] = useState<IPrato[]>([])

    useEffect(() => {
        http.get<IPrato[]>('pratos/')
            .then(resposta => setPratos(resposta.data))
    }, [])

    const excluir = (pratoAhSerExcluido: IPrato) => {
        http.delete(`pratos/${pratoAhSerExcluido.id}/`)
            .then(() => {
                const listaPratos = pratos.filter(pratos => pratos.id !== pratoAhSerExcluido.id)
                setPratos([...listaPratos])
            })
    }

    return (
        <>
            {/*Conteúdo do form*/}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Nome
                            </TableCell>
                            <TableCell>
                                Tag
                            </TableCell>
                            <TableCell>
                                Imagem
                            </TableCell>
                            <TableCell>
                                Editar
                            </TableCell>
                            <TableCell>
                                Excluir
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pratos.map(prato => <TableRow key={prato.id}>
                            <TableCell>
                                {prato.nome}
                            </TableCell>
                            <TableCell>
                                {prato.tag}
                            </TableCell>
                            <TableCell>
                                <a href={prato.imagem} target="_blank" rel="noopener noreferrer">Ver imagem
                                </a>
                            </TableCell>
                            <TableCell>
                                [ <Link component={RouterLink} to={`/admin/pratos/${prato.id}`}>editar</Link> ]
                            </TableCell>
                            <TableCell>
                                <Button
                                    variant="outlined"
                                    color="error"
                                    onClick={() => excluir(prato)}> Excluir </Button>
                            </TableCell>
                        </TableRow>)}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default AdministracaoPratos;