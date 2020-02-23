import React from 'react'
import { css } from '@emotion/core';

import Nav from '../nav/nav'

export default function Header(props) {
    return (

        <header css = { css `background-color:#333;padding: 1rem 0 0;` }>
            <div css={css`max-width:1200px;
                          margin:0 auto;
                          color:white;
                          
                          @media(min-width:768px){
                            display:flex;
                            justify-content: space-between;
                            
            }`}>
                <h1 css = { css `@media(max-width:767px){text-align:center;}` }>
                    Hotel Gatsby
                </h1>
                <Nav/>
            </div>
        </header>
    )
}
