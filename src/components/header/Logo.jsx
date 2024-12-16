import React from 'react'
import { useTheme } from '../../contexts/theme';

const Logo = () => {
  const { theme } = useTheme();

  const {
      Header: { borderColor },
  } = theme;

  const borderStyles = {
      borderColor: borderColor,
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