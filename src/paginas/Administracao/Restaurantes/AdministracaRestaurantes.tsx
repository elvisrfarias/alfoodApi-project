import React, {useEffect, useState} from 'react'
import IRestaurante from '../../../interfaces/IRestaurante';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const AdministracaRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])

  useEffect(() => {
    axios.get<IRestaurante[]>('http://localhost:8000/api/v2/restaurantes/')
    .then((response) => {
      setRestaurantes(response.data)
    }).catch(error => console.log(error))
  })

  return (
    <>
     <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Restaurantes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {restaurantes.map((item) => 
          <TableRow key={item.id}>
            <TableCell>{item.nome}</TableCell>
          </TableRow>
          )}
        </TableBody>
      </Table>
     </TableContainer>
    </>
  )
}

export default AdministracaRestaurantes;
