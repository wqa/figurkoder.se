import React from 'react'
import { Navigation, Drawer } from 'react-mdl'
import { Link } from 'react-router'

const Menu = () => {
    return (
      <Drawer title="Meny">
        <Navigation>
          <a href="">Hem</a>
          <Link to={'/about'}>Om sidan</Link>
          <Link to={'/faq'}>Vanliga frågor</Link>
          <Link to={'/contact'}>Kontakta mig</Link>
        </Navigation>
      </Drawer>
    )
}

export default Menu
