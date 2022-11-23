import React from 'react'
import foto1 from '../images/foto1.png'
import foto2 from '../images/foto2.jpg'
import foto3 from '../images/foto3.jpg'
import foto4 from '../images/foto4.jpg'

function ImageProduct() {
  return (
    <div>
        <img src={foto1} alt="" />
        <img src={foto2} alt="" />
        <img src={foto3} alt="" />
        <img src={foto4} alt="" />
    </div>
  )
}

export default ImageProduct