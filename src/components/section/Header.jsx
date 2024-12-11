import React from 'react'
import { headerMenus, searchKeyword, snsLink } from '../../data/header';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header id='header' role='banner'>
            <h1 className='header__logo'>
                <a href='/'>
                    <em aria-hidden='true'></em>
                    <span>webs<br />youtube</span>
                </a>
            </h1>

            <nav className='header__menu'>
                <ul className='menu'>
                    {headerMenus.map((menu, key) => (
                        <li key={key}>
                            <Link to={menu.src}>
                                {menu.icon}{menu.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className='keyword'>
                    {searchKeyword.map((keyword, key) => (
                        <li key={key}>
                            <Link to={keyword.src}>
                                {keyword.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            
            <div className='header__sns'>
                <ul>
                    {snsLink.map((sns, key) => (
                        <li key={key}>
                            {/* <Link to={sns.url}>
                                {sns.icon}
                            </Link> */}
                            <a href={sns.url} target='_black' rel='noopener noreferrer' aria-label={sns.title}>
                                <span>{sns.icon}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}

export default Header