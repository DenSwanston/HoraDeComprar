import React from 'react'
import ItemDetail from './ItemDetail'
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


const relojes = [
  { id: 1, estilo: "metal", nombre: "Skmei Dark Machine", precio: 150000, stock: 14, img: { Metal1 } },
  { id: 2, estilo: "metal", nombre: "Skmei High Constrast", precio: 145000, stock: 6, img: { Metal2 } },
  { id: 3, estilo: "metal", nombre: "Skmei Weeky-Weeky", precio: 75000, stock: 8, img: { Metal3 } },
  { id: 4, estilo: "metal", nombre: "Casio Edifice", precio: 100000, stock: 0, img: { Metal4 } },
  { id: 5, estilo: "metal", nombre: "Montreal Steel", precio: 80000, stock: 3, img: { Metal5 } },
  { id: 6, estilo: "metal", nombre: "Casio Illuminator", precio: 250000, stock: 10, img: { Metal6 } },
  { id: 7, estilo: "cuero", nombre: "Tommy  Hilfigher", precio: 48000, stock: 34, img: { Cuero1 } },
  { id: 8, estilo: "cuero", nombre: "Citizen Automatic", precio: 48000, stock: 3, img: { Cuero2 } },
  { id: 9, estilo: "cuero", nombre: "Casio Sencillo", precio: 35000, stock: 8, img: { Cuero3 } },
  { id: 10, estilo: "cuero", nombre: "N Viforce", precio: 78000, stock: 21, img: { Cuero4 } },
  { id: 11, estilo: "cuero", nombre: "Skmei Black-Lizzard", precio: 48000, stock: 4, img: { Cuero5 } },
  { id: 12, estilo: "cucu", nombre: "Cucú del Bosque", precio: 210000, stock: 3, img: { Cucu1 } },
  { id: 13, estilo: "cucu", nombre: "Cucú de la Baviera", precio: 348000, stock: 2, img: { Cucu2 } },
  { id: 14, estilo: "arena", nombre: "Green Sand", precio: 8000, stock: 67, img: { Arena1 } },
  { id: 15, estilo: "arena", nombre: "Arenas de Barbie", precio: 9000, stock: 37, img: { Arena2 } },
]

const getRelojes = new Promise((resolve, reject) => {
  if (relojes.length > 0) {
    setTimeout(() => {
      resolve(relojes)
    }, 2000)
  } else {
    reject(new Error("NO HAY RELOJES"))
  }
}
)

getRelojes.then((resultado) => {
  console.log(resultado)
})
  .catch((error) => {
    console.log(error)
  })



const ItemDetailContainer = () => {
  return (
    <ItemDetail
    relojes={relojes}
    />
  )
}

export default ItemDetailContainer