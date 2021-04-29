import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { Button, } from '@chakra-ui/react'

// const name = 'Takuto'
export const siteTitle = '記事一覧'

export default function Layout({ children, home,title ="テラベル",description="お寺をラベリングしていくサイト テラベル" }) {
  return (
    <div className={styles.container}>
      <Head>
      <meta property="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://res.cloudinary.com/telabel/image/upload/v1619681146/ogp_vee8y7.png`} />
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            {/* <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
            />
            <h1 className={utilStyles.heading2Xl}></h1> */}
          </>
        ) : (
          <>
            {/* <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                />
              </a>
            </Link> */}
            {/* <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}></a>
              </Link>
            </h2> */}
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>

        </div>
      )}
    </div>
  )
}
