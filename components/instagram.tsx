import type InstaPost from '../interfaces/instaPost'
import PostCard from './postCard'

type Props = {
    posts: InstaPost[],
    title: string
}

const Instagram = ({ posts, title }: Props) => {
  return (
    <section className='bg-[#CAC8C8]'>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
       {title}
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            title={post.title}
            link={post.link}
            image={post.image}
          />
        ))}
      </ul>
    </section>
  )
}

export default Instagram