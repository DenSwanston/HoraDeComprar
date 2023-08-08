import { Link } from 'react-router-dom'
import { CardHeader, Divider, CardBody, Card, Button, CardFooter, ButtonGroup, Text, Image, Img } from '@chakra-ui/react';


const Item = ({ id, nombre, img }) => {
  return (
    <>
      <Card id="card" className='card'>
        <CardHeader id="nombrereloj">{nombre}</CardHeader>
        <CardBody>
          <Image id="fotoencard"
            img={img}/>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button id="botonencard">
              <Link to={`/item/${id}`}>
              Lo quiero!
              </Link>
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  )
}

export default Item

