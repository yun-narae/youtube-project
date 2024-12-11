import React from 'react';
import { snsLink } from '../../data/header';
import { useTheme } from '../../contexts/theme';


const Sns = () => {
    const { theme } = useTheme();

    const {
        Header: { border },
    } = theme;

    const borderStyles = {
        borderColor: border,
    };

    return (
        <div className='header__sns' style={borderStyles}>
            <ul>
                {snsLink.map((sns, key) => (
                    <li key={key}>
                        <a href={sns.url} target='_black' rel='noopener noreferrer' aria-label={sns.title}>
                            <span>{sns.icon}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sns