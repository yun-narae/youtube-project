import React from 'react'
import { useTheme } from '../../contexts/theme';

const Logo = () => {
  const { theme } = useTheme();

  const {
      Header: { border },
  } = theme;

  const borderStyles = {
      borderColor: border,
  };

  return (
    <h1 className='header__logo' style={borderStyles}>
        <a href='/'>
            <em aria-hidden='true'></em>
            <span>webs<br />youtube</span>
        </a>
    </h1>
  )
}

export default Logo