import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import Header from './header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>テラベル ーお寺をラベリングしていくサイトー</title>
        <link rel="icon" href="/fabicon.png" />
      </Head>

      <main className={styles.main}>
      <div className={styles.header}>
        <Header />
            <Link href='./login'>
            <a>login</a>
            </Link>
            <Link href='./form'>
            <a>お問い合わせ</a>
            </Link>
          </div>
        <div>
          <h3>お寺をラベリングしていくサイト</h3>
          <h1>テラベル</h1>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
