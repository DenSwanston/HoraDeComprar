import React from 'react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'
import { CardHeader, Divider, CardBody, Card, CardFooter, Text, Image } from '@chakra-ui/react';


const ItemDetail = ({ relojes }) => {
  const { id, estilo, nombre, precio, stock, img } = useParams()

  const relojesFiltrados = relojes.filter((reloj) => reloj.id == id)

  return (
    <>
      {relojesFiltrados.map((r) => {
        return (
          <>
            <Card id="card" className='card'>
              <CardHeader id="nombrereloj">{r.nombre}</CardHeader>
              <CardBody>
                <Image
                  src={r.img} />
                <Text>Estilo: {r.estilo}</Text>
                <Text>Precio: ${r.precio}</Text>
                <Text>Últimas {r.stock} unidades!</Text>
              </CardBody>
              <Divider />
              <CardFooter>
                <ItemCount />
              </CardFooter>
            </Card>

          </>
        )
      })}



    </>
  )
}

export default ItemDetail


