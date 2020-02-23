import React from 'react';
import { Helmet } from "react-helmet";
import { Global, css } from '@emotion/core';
//my component
import Header from '../header/header';
import Footer from '../footer/footer';

export default function Layout(props) {
    return (
        <React.Fragment>
        <Global
                styles={css `html{font-size:62.65%;}body{font-size:16px;font-size:1.6rem;line-height:1.5; font-family: 'PT Sans', sans-serif;} h1{
 }h1,h2,h3{font-family: 'Roboto', sans-serif;margin:0 !important;} ul{list-style:none;margin:0; padding:0;}`}
                />
        <Helmet>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" integrity="sha256-WAgYcAck1C1/zEl5sBl5cfyhxtLgKGdpI3oKyJffVRI=" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|Roboto:300,400,700&display=swap" rel="stylesheet" />
                <title>{props.title}</title>
        </Helmet>
          <Header/>
          {props.children}
          <Footer/>
        </React.Fragment>

    )
}
