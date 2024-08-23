export const pageQuery = `#graphql 
  query Page($title: String) {
    page(where: { title: $title }) {
      meta {
        title
        description
        url
        image
        author
        theme {
          hex
        }
      }
      header {
        heading
        subheading
      }
      navigation {
        heading
        links {
          ...Link
        }
      }
      content {
        heading
        figure {
          text
          caption
        }
        copy
        links {
          ...Link
        }
      }
      footer {
        heading
        copy
        secondaryCopy
      }
    }
  }

  fragment Link on Link {
    id
    url
    text
    icon
    target
  }
`;