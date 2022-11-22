import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-scroll'

function CardProducts() {
  return (
    <div>
      <ul>
        <img width={200} src={logo} alt="" />

        <li><Link to='#'>Home</Link> </li>
        <li><Link to='#'>Sobre</Link> </li>
        <li><Link to='#'>Contato</Link> </li>
        <li><Link to='#'>Login</Link> </li>
      </ul>

    <input type="text" placeholder='categoria' />
    <button>profile</button>
    <button>cart</button>
    </div>
  )
}

export default CardProducts