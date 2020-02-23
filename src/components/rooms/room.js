import React from 'react'
import styled from '@emotion/styled'
import { Link as Enlace } from 'gatsby'
import Image from 'gatsby-image'

const RoomCont = styled(Enlace)
`
margin:30px 10px;
transition: all 0.3s 0.3s;

    text-decoration:none;
    color:#333 !important;

h3{
    margin:30px 5px !important;
    font-size:2.5rem;
    
    
    
}
p{
    text-align:justify;
    color:#333;
    margin:5px;
}
&:hover{
    box-shadow: 3px 3px 5px #333;
    transition: all 0.3s 0.3s;
}
`

export default function Room({ room }) {
    let { titulo, contenido, slug, imagen } = room

    return (<RoomCont to={slug}>
    
    <Image fluid={imagen.fluid} />
            <h3>{titulo}</h3>
            <p>{contenido}</p>
            
            </RoomCont>)
}
