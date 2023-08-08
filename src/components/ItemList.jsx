import React from 'react'
import Item from './Item'
import Metal1 from '../Assets/Metal/Metal1.png'
import Metal2 from '../Assets/Metal/Metal2.png'
import Metal3 from '../Assets/Metal/Metal3.png'
import Metal4 from '../Assets/Metal/Metal4.png'
import Metal5 from '../Assets/Metal/Metal5.png'
import Metal6 from '../Assets/Metal/Metal6.png'
import Cuero1 from '../Assets/Cuero/Cuero1.png'
import Cuero2 from '../Assets/Cuero/Cuero2.png'
import Cuero3 from '../Assets/Cuero/Cuero3.png'
import Cuero4 from '../Assets/Cuero/Cuero4.png'
import Cuero5 from '../Assets/Cuero/Cuero5.png'
import Cucu1 from '../Assets/Cucu/Cucu1.png'
import Cucu2 from '../Assets/Cucu/Cucu2.png'
import Arena1 from '../Assets/Arena/Arena1.png'
import Arena2 from '../Assets/Arena/Arena2.png'


const ItemList = ({relojes}) => {

  return (
  <>
        {relojes.map((r) => {
        return (
          <Item
          key={r.id}
          id={r.id}
          nombre={r.nombre}
          precio={r.precio}
          stock={r.stock}
          img={r.img}
          />
        )
      })}
  </>
  )
}

export default ItemList