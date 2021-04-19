import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import HeaderBlog from './headerBlog'
import TopMain from './topMain'

export default function Home() {
  return (
    <>
      <Head>
        <title>テラベル ーお寺をラベリングしていくサイトー</title>
        <link rel="icon" href="https://res.cloudinary.com/telabel/image/upload/v1618286838/fabicon_jr2jqg.png" />
      </Head>

        <Header />
        <TopMain />
        <HeaderBlog />
        <Footer />
    </>
  )
}
