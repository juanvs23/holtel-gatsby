/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async({ actions, graphql, reporter }) => {
    const result = await graphql(` query{
            allDatoCmsHabitacion{
                nodes{
                slug
                }
            }
        }`)
    //console.log(result.data.allDatoCmsHabitacion.nodes)
    if (result.errors) {
        reporter.panic('No hubo resultado', result.errors)

    }
    else {
        const habitaciones = result.data.allDatoCmsHabitacion.nodes
        habitaciones.forEach((habitacion) => {
            actions.createPage({
                path: habitacion.slug,
                component: require.resolve("./src/components/roompage/index.js"),
                context: {
                    slug: habitacion.slug
                }

            })
        })
    }
}
