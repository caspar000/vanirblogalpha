import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/Vanir.jpg'
import Phi from '../images/phi.png'
import Psy from '../images/psy.png'
import Tec from '../images/tec.png'


const Sidebar = () => {
  return(
    <div className="sidebar">
      <Link to="/">
        <img src={Logo} alt="Vanir" />
        <span>Vanir</span>
      </Link>
      <div className="navlinks">
        <Link to="/"><img src={Phi} alt="+" />PHILOSOPHY</Link>
        <Link to="/"><img src={Psy} alt="+" />PSYCHOLOGY</Link>
        <Link to="/"><img src={Tec} alt="+" />TECHNOLOGY</Link>
        <Link to="/">PROJECTS</Link>
        <Link to="/">RSS FEED</Link>
        <Link to="/">SHOP</Link>
      </div>
    </div>
  )
}

export default Sidebar