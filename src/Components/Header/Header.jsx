import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/images/icon.png'

class Header extends Component {


  render(){
    return(
      <header>
        <img src={ logo } alt="Main Logo" />
        <span>Shelfie</span>
        <Link to="/">Dashboard</Link>
        <Link to="/add-inventory">Add Inventory</Link>
      </header>
    )
  }
}

export default Header;