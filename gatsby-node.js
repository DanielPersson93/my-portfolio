const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

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