import Container from '../components/container'
import MoreStories from '../components/more-stories'
// import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'

export default function Index({ allPosts }) {
  // const heroPost = allPosts[0]
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
        <section className="h-card hidden">

          {/* About me */}
          <span className="p-name">Clara Le</span>
          <span className="p-note">Hey! I'm Clara, polymath and currently working as a designer.</span>

          {/* Profile picture */}
          <img className="u-photo" src="/assets/blog/authors/clara_20180514_132853_small.jpg"/>

          {/* Links */}
          <a className="u-url u-uid" href="https://clarale.com"></a>
          <a className="u-url" rel="me" href="https://twitter.com/clara__le"></a>
          <a className="u-url" rel="me" href="https://github.com/hgcl"></a>

          {/* Categories */}
          <span className="p-category">Digital Garden</span>
          <span className="p-category">Design</span>
          <span className="p-category">Exploring</span>
          <span className="p-category">Cooking and DIY Projects</span>
          <span className="p-category">Sci-fi Books</span>

        </section>
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