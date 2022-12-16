import type InstaPost from '../interfaces/instaPost'
import PostCard from './postCard'

type Props = {
    posts: InstaPost[],
    title: string
}

const Instagram = ({ posts, title }: Props) => {
  return (
    <section className='bg-[#CAC8C8] p-3 md:p-10'>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
       {title}
      </h2>
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-y-10 md:gap-x-6 xl:grid-cols-3">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            caption={post.caption }
            media_url={post.media_url }
            permalink={post.permalink}
            media={post.media_type}
          />
        ))}
      </ul>
    </section>
  )
}

export default Instagram