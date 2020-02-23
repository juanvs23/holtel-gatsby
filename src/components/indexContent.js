import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import { css } from '@emotion/core';


const IndeXContent = () => {
  const informacion = useStaticQuery(graphql `
    query{
  allDatoCmsPagina(filter: {slug: {eq:"inicio"}}){
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
    <div css={css`
   
   padding-bottom:70px;
    
    
    `} > <h2 css={css`
   text-align:center;
   font-size:3rem;
   margin:4rem 0 !important;
    `}>{titulo}</h2>
    <div css={css`
    max-width:1200px;
    width:90%;
    margin:0 auto;
    @media(min-width:768px){
          display: grid;
    grid-template-columns: 50% 50%;
    column-gap: 2rem;
    
    }
    `} >
    <p css={css`
   line-height:2.5;
    `} >{contenido}</p>
    <Image fluid={imagen.fluid} />
</div>

</div>

  )

}
export default IndeXContent
