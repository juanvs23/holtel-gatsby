import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled';

const NavStyle = styled.nav `
    display:flex;
    justify-content:center;
    @media(min-width:768px){
        margin-bottom:0;
        justify-content:content-between;
        
        
    }
`;
const NavLink = styled(Link)
`color:white;
padding:1rem;
text-decoration:none;
&.active{
    border-bottom:2px solid white;
}
&:hover{
    border-bottom:2px solid white;
}
`

const Nav = () => {
    return (
        <NavStyle>
            
                <NavLink  activeClassName="active" to={'/'}>Inicio</NavLink>
                <NavLink activeClassName="active" to={'/about'}>Nosotros</NavLink>
            
        </NavStyle>
    )
}
export default Nav
