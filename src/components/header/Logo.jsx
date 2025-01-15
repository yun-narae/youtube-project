import React from 'react'
import { useTheme } from '../../contexts/theme';
import { Link } from 'react-router-dom';

const Logo = ({ isMenuActive, toggleMenu }) => {
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
        <>
            <h1 className='header__logo' style={borderStyles}>
                <Link to='/'>
                    <em aria-hidden='true' style={logoStyles}></em>
                    <span>webs<br />youtube</span>
                </Link>
                    <div
                        className="btn-box"
                        id="headerToggle"
                        role="button"
                        tabIndex="0"
                        aria-controls="primary-menu"
                        onClick={toggleMenu}
                    >
                        <span>{isMenuActive ? "햄" : "버거"}</span>
                    </div>
            </h1>
        </>
    )
}

export default Logo