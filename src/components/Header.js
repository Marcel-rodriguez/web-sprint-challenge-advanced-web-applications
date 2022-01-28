import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = ({isLoggedIn}) => {
    return(
        <HeaderStyle>
            <p>Blogger Pro</p>
            {isLoggedIn && <p>Welcome {localStorage.getItem('username')}!</p>}
            <MenuStyle>
                <li>{!isLoggedIn && <Link to="/">Login</Link>}</li>
                <li>{isLoggedIn && <Link to="/view">View</Link>}</li>
                <li>{isLoggedIn && <Link to="/logout">Logout</Link>}</li>
            </MenuStyle>
        </HeaderStyle>
    );
}

export default Header;

const HeaderStyle = styled.div`
    padding: 1em;
    background-color: #daa1ac;
    display:flex;
    align-items: center;
    justify-content: space-between;

    p {
        font-weight: bold;
        font-size: 1.5em;
    }
`

const MenuStyle = styled.ul`
  li {
        display: inline-block;
        padding: 0.3rem 1rem;
        
        a {
            text-decoration: none;
            color: black;
            font-size: 1em;
        }
    }
`