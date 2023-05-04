import React from 'react'
import { Link } from 'react-router-dom'
import { FaLaptop, FaTabletAlt, FaMobile } from 'react-icons/fa'
import useWindowSize from './hooks/useWindowSize'

const Header = ({ title }) => {

  const { width } = useWindowSize();
  return (
    <header className='Header'>
      <Link to='/' 
        style={{ textDecoration: 'none', color: 'black' }}>
        <h1>{title}</h1>
        {width < 758 ? <FaMobile /> 
          : width < 992 ? <FaTabletAlt />
            : <FaLaptop />}
      </Link>
        
    </header>
  )
}

export default Header