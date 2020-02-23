import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout/layout'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const Wrap = styled.section `
max-width:1200px;
width:90%;
margin:0 auto;
p{
  padding:15px;
 }
 h1{
   padding: 0 15px;
 }
@media(min-width:768px){
 display: flex;
    align-items: center;
    min-height: 70vh;
 article{
   display: grid;
    grid-template-columns: 50% 50%;
    column-gap: 2rem;
 }
  article p{
   text-align:justify;
 }
 
}

`

export const info = graphql `
  query ($slug: String!) {
  allDatoCmsHabitacion(filter: {slug: {eq: $slug}}) {
    nodes {
      titulo
      contenido
      imagen {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      
      id
    }
  }
}
`

let RoomTemplate = ({ data }) => {


  let { titulo, imagen, contenido } = data.allDatoCmsHabitacion.nodes[0]
  return (
    <Layout title={`Habitación ${titulo}`}>
    
    <Wrap>
    <article>
      <Image fluid={imagen.fluid}/>
      <div>
      <h1 css={css``}>{titulo}</h1>
      <p  css={css``}> {contenido} </p>
      </div>
    </article>
    </Wrap>
    </Layout>

  )
}
export default RoomTemplate
