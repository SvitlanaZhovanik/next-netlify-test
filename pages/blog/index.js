import Link from 'next/link'
import Layout from '../../components/layout'

const importBlogPosts = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const markdownFiles = require
    .context('../../content/blogPosts', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2))

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../../content/blogPosts/${path}`)
      return { ...markdown, slug: path.substring(0, path.length - 3) }
    })
  )
}

const Blog = ({ postsList }) => (
  <Layout>
    {postsList.map((post) => (
      <div key={post.slug} className="text-center">
        <Link href="/blog/post/[slug]" as={`/blog/post/${post.slug}`}>
          <a>
            <img className='max-w-full max-h-[300px]' src={post.attributes.thumbnail} />
            <h2>{post.attributes.title}</h2>
          </a>
        </Link>
      </div>
    ))}
  </Layout>
)

export async function getStaticProps() {
  const postsList = await importBlogPosts()

  return {
    props: {
      postsList,
    }, // will be passed to the page component as props
  }
}

export default Blog
