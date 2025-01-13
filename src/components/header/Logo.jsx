import React from 'react'
import { useTheme } from '../../contexts/theme';
import { Link } from 'react-router-dom';

const Logo = ({ toggleMenu }) => {
  const { theme } = useTheme();

  const {
      Header: { borderColor, logoColor },
  } = theme;

  const borderStyles = {
      borderColor: borderColor,
  };

  const logoStyles = {
    backgroundColor: logoColor,
  };

  return (
    <h1 className='header__logo' style={borderStyles}>
        <Link to='/'>
            <em aria-hidden='true' style={logoStyles} onClick={toggleMenu}></em>
            <span>webs<br />youtube</span>
        </Link>
    </h1>
  )
}

export default Logo