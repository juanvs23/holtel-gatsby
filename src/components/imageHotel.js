import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
//emotion
import styled from '@emotion/styled';
//plugin background
import BackgroundImage from 'gatsby-background-image'

//styled component
const HeroImage = styled(BackgroundImage)
`
min-height:70vh;
width:100%;
div.shadow{
    position:absolute;
    top:0;
    width:100%;
    height:100%;
    background: rgba(0,0,0,0.5);
    display:flex;
    align-items: center;
    justify-content: center;
}
h1{
    color:white;
    font-size:4rem;
}
p{
    color:white;
    opacity:0.7;
    text-align:center;
    font-size:2rem;
}
`

export default function ImageHotel() {
    const { image } = useStaticQuery(graphql `
    query{
  image:file(relativePath:{eq:"playita.jpg"}) {
    sharp:childImageSharp{
      fluid{
         ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
    `)
    // console.log(image.sharp.fluid)
    return (
        <HeroImage tag="section" fluid={image.sharp.fluid}>
        <div className="shadow">
           <div>
            <h1>
                Hola desde imageHotel
            </h1>
            <p>
            Lorem ipsum
            </p>
           </div>
        </div>
        
        </HeroImage>
    )
}
