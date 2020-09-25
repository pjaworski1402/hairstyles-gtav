const { createRemoteFileNode } = require("gatsby-source-filesystem")
exports.onCreateNode = async ({
  node,
  actions,
  store,
  cache,
  createNodeId,
}) => {
  const { createNode } = actions

  // replace ".sliderHome" for the name of multiple media in Strapi CMS
  let sliderImages = node.gallery

  // replace “StrapiHome” for your node type
  if (node.internal.type === "StrapiOffer") {
    if (sliderImages.length > 0) {
      const images = await Promise.all(
        sliderImages.map(el =>
          createRemoteFileNode({
            url: `${el.url}`,
            parentNodeId: node.id,
            store,
            cache,
            createNode,
            createNodeId,
          })
        )
      )
      sliderImages.forEach((image, i) => {
        image.localFile___NODE = images[i].id
      })
    }
  }
}
