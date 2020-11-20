const path = require(`path`);

exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
  if (node.internal.type === `ContentfulPage`) {
    createNodeField({
      node,
      name: `slug`,
      value: node.slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query pagesQuery {
      allContentfulPage {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulAlbum {
        edges {
          node {
            name
          }
        }
      }
      allContentfulBlog {
        edges {
          node {
            slug
            posts {
              title
            }
          }
        }
      }
    }
  `);

  result.data.allContentfulPage.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve('src/templates/Page.tsx'),
      context: { slug: node.slug },
    });
  });

  result.data.allContentfulAlbum.edges.forEach(({ node }) => {
    createPage({
      path: `/albums/${encodeURI(node.name.toLowerCase())}`,
      component: path.resolve('src/templates/Album.tsx'),
      context: { name: node.name },
    });
  });

  result.data.allContentfulBlog.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve('src/templates/Blog.tsx'),
      context: { slug: node.slug },
    });

    node.posts.forEach((post) => {
      createPage({
        path: `${node.slug}/${encodeURI(post.title.toLowerCase())}`,
        component: path.resolve('src/templates/BlogPost.tsx'),
        context: { title: post.title },
      });
    });
  });
};
