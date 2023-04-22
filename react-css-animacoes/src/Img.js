import React from 'react'
import foto from './img/foto.jpg'
import { ReactComponent as Dog } from './img/dog.svg'

const Img = () => {
  return (
    <div>
        <p className='fundo'></p>
        <Dog />
        <img src={foto}/>
        

    </div>
  )
}

export default Img