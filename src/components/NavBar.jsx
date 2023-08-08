import { Menu, MenuButton, MenuList, MenuItem, Button, Flex, Box, Spacer } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget';
import Marca from '../Assets/Marca.png'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <Flex className="Barra">
      <Box>
        <Link to={"/"}>
          <img className='Marca' src={Marca} />
        </Link>
      </Box>
      <Spacer />
      <Menu>
        <MenuButton  className="menu" as={Button} rightIcon={<ChevronDownIcon />}>
          Estilos
        </MenuButton>
        <MenuList>
          <MenuItem className="estilos"><Link to={`/estilo/${`metal`}`}>Puro Metal</Link></MenuItem>
          <MenuItem className="estilos"><Link to={`/estilo/${`cuero`}`}>Cuero Argento</Link></MenuItem>
          <MenuItem className="estilos"><Link to={`/estilo/${`arena`}`}>Arena</Link></MenuItem>
          <MenuItem className="estilos"><Link to={`/estilo/${`cucu`}`}>Cucú</Link></MenuItem>
        </MenuList>
      </Menu>
      <Spacer />
      <Box>
        <Link to={"/cart"}>
          <CartWidget />
        </Link>
      </Box>
    </Flex>
  )
}

export default NavBar

