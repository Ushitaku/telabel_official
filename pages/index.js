import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import Header from './header'
import Footer from './footer'
import HeaderBlog from './headerBlog'

export default function Home() {
  return (
    <>
      <Head>
        <title>テラベル ーお寺をラベリングしていくサイトー</title>
        <link rel="icon" href="https://res.cloudinary.com/telabel/image/upload/v1618286838/fabicon_jr2jqg.png" />
      </Head>

        <Header />
            <Link href='./login'>
            <a>login</a>
            </Link>
            <Link href='./contactForm'>
            <a>お問い合わせ</a>
            </Link>
        <div>
          <h3>お寺をラベリングしていくサイト</h3>
          <h1>テラベル</h1>
        </div>
        <HeaderBlog />
        <Footer />
    </>
  )
}
