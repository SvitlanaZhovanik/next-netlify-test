import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'
import Instagram from '../components/instagram'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  const posts = [{slug:"1", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quisquam possimus numquam nesciunt sit.", image: {url:"https://cdn.pixabay.com/photo/2022/12/12/19/10/plant-7651732_960_720.jpg", alt: "морозная веточка"}, link:"https://www.instagram.com/p/CmJ8NJbrmSU/?utm_source=ig_web_copy_link"},{slug:"12",title: "Ut sapiente voluptatibus, consequuntur maiores blanditiis sunt non illo culpa inventore cum animi quam magnam nam.",image: {url:"https://cdn.pixabay.com/photo/2022/12/12/12/46/cat-7650987_960_720.jpg", alt: "котик"}, link:"https://www.instagram.com/p/CmHM_syN4Eu/?utm_source=ig_web_copy_link"}]
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog</title>
        </Head>
        <Container>
          <Intro />
          <Instagram posts={posts} title={"Останні новини"} />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
