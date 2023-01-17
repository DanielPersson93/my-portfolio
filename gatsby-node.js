const path = require('path')
/**
 * Den skapar upp och exporterar de nya sidorna till de olika filerna vi har angivit. 
 * @param {*} graphql, actions 
 */
exports.createPages = async ({ graphql, actions }) => {

    /**
     * graphql frågan till contentful
     */
    const { data: singleData } = await graphql(`
        query getAllSlugs {
            allContentfulPost {
                nodes {
                    slug
                    
                }
            }
        }
`
    )
    /**
     * Lopar igenom och skapar upp en ny singlepage för varje project vi har, den tar då även slugen och lägger till i sökvägen
     */
    singleData.allContentfulPost.nodes.forEach(node => {
        actions.createPage({
            //URL
            path: '/projects/' + node.slug,
            // Template
            component: path.resolve('./src/pages/singleProject.jsx'),
            //Content
            context: { slug: node.slug }
        })
    })

    /**
     * Vår graphql fråga som går mot contentful.
     */
    const { data: filtredData } = await graphql(`
        query getAllSlugs {
            allContentfulPost {
                nodes {
                    category
                    
                }
            }
        }
`
    )
    /**
     * Denna funktion lopar igenom varje node i detta fall varje object och skapar upp en ny sida för varje filtrerat project(post)
     */
    filtredData.allContentfulPost.nodes.forEach(node => {
        actions.createPage({
            //URL
            path: '/projects/' + node.category,
            // Template
            component: path.resolve('./src/pages/filtred-project.jsx'),
            //Content
            context: { category: node.category }
        })
    })

}