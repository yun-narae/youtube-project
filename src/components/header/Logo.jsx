import React from 'react'
import { useTheme } from '../../contexts/theme';
import { Link } from 'react-router-dom';

const Logo = ({ isMenuActive, toggleMenu }) => {
    const { theme } = useTheme();

    const {
        textColor,
        Header: { borderColor, logoColor, navMenuColor },
    } = theme;

    const styles = {
        navMenuStyles: {
            backgroundColor: navMenuColor,
        },

        textStyles: {
            color: textColor
        },

        borderStyles: {
            borderColor: borderColor,
        },
        
        logoStyles: {
            backgroundColor: logoColor,
        }
    }

    return (
        <>
            <h1 className='header__logo' style={styles.borderStyles}>
                <Link to='/'>
                    <em aria-hidden='true' style={styles.logoStyles}></em>
                    <span>webs<br />youtube</span>
                </Link>
                    <div
                        className="btn-box"
                        id="headerToggle"
                        role="button"
                        tabIndex="0"
                        aria-controls="primary-menu"
                        onClick={toggleMenu}
                        style={styles.navMenuStyles}
                    >
                        <span style={styles.textStyles}>{isMenuActive ? "햄" : "버거"}</span>
                    </div>
            </h1>
        </>
    )
}

export default Logo