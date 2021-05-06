import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header>
      <Link to={'/'}>Главная</Link>
      <Link to={'/employees'}>Сотрудники</Link>
    </header>
  ); 
}

export default Header;
