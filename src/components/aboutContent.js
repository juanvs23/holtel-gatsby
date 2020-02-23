import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'


const AboutWrapper = styled.section `
max-width:1200px;
width:90%;
margin:0 auto;
padding:70px 0;
@media(min-width:768px){
          display: grid;
    grid-template-columns: 50% 50%;
    column-gap: 2rem;
}
`


const AboutContent = () => {
    const informacion = useStaticQuery(graphql `
    query{
  allDatoCmsPagina(filter: {slug: {eq:"about"}}){
    nodes{
      titulo
      contenido
      imagen{
        fluid{
          ...GatsbyDatoCmsFluid
        }
      }
    }
  } 
}
    `)

    let { titulo, imagen, contenido } = informacion.allDatoCmsPagina.nodes[0]
    console.log(imagen.fluid.src)
    return (
        <React.Fragment>
            <AboutWrapper>
                <div>
                 <h2>{titulo}</h2>
                 <p>{contenido}</p>
                </div>
                <Image fluid={imagen.fluid} />
            </AboutWrapper>
        </React.Fragment>
    )

}
export default AboutContent
