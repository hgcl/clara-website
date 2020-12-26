import Container from '../components/container'
import MoreStories from '../components/more-stories'
// import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>Clara Le</title>
        </Head>
        <Container>
          <Intro />
          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              // coverImage={heroPost.coverImage}
              date={heroPost.date}
              // author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )} */}
          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
        </Container>
        <ul>
          <li><a href="https://twitter.com/clara__le" rel="me">@clara__le on Twitter</a></li>
          <li><a href="https://github.com/hgcl" rel="me">Github</a></li>
        </ul>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    // 'author',
    // 'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}