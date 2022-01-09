function Episodelist({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title.rendered}</li>
      ))}
    </ul>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://www.handwerksvideos.de/wp-json/wp/v2/pages?page=1&per_page=50&categories=12&orderby=date&_embed')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Episodelist