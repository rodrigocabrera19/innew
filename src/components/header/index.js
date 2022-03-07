import React from 'react';
import Nav from './Nav'
import Portada from './Portada'

const Header = ({ t, i18n }) => {
  return (
    <div id='header-container'>
        <Nav t={t} i18n={i18n}/>
        <Portada t={t}/>
    </div>
  )
}

export default Header