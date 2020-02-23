import { graphql, useStaticQuery } from 'gatsby'

const useRooms = () => {
    const data = useStaticQuery(graphql `
    query{
            allDatoCmsHabitacion{
                nodes{
                    titulo
                    contenido
                    imagen{
                        fluid(maxWidth:1200){
                            ...GatsbyDatoCmsFluid
                        }
                    }
                slug
                id
                }
            }
        }

    `)
    return data.allDatoCmsHabitacion.nodes
}
export default useRooms
