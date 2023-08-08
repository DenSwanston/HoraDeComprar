import {useState} from 'react'



const ItemCount = () => {
    const [contador, setContador] = useState(0)
  return (
    <>
    <button onClick={()=>setContador(contador+1)}>+</button>
    <p>{contador}</p>
    <button onClick={()=>setContador(contador-1)}>-</button>
    <button onClick={()=>setContador(0)}>Eliminar</button>
    </>
  )

}

export default ItemCount