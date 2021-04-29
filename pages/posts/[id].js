import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'
import {Box, Flex, Image,Link,Button } from '@chakra-ui/react'
import {InstapaperShareButton, TwitterShareButton, FacebookShareButton,} from "react-share";

export default function Post({ postData }) {
    return (
    <Layout>
      <Head>
        <link rel="icon" href="https://res.cloudinary.com/telabel/image/upload/v1618286838/fabicon_jr2jqg.png" />
        <title>{postData.title}</title>
      </Head>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <h2>{postData.location}</h2>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

      <Flex justifyContent="flex-end" m='4' mt="4" >
        <FacebookShareButton url={`https://telabel-official-q1x2tx72h-ushitaku.vercel.app/posts/${postData.id}`}>
        <Image p="" src={'https://res.cloudinary.com/telabel/image/upload/v1618401644/facebook_erc9dv.png'} alt='Facebook'
                width={''} height={''} />
        </FacebookShareButton>

        <TwitterShareButton url={`https://telabel-official-q1x2tx72h-ushitaku.vercel.app/posts/${postData.id}`} title={postData.title}>
        <Image p="" src={'https://res.cloudinary.com/telabel/image/upload/v1618401644/twitter_wzmz9k.png'} alt='Twitter'
                width={''} height={''} />
        </TwitterShareButton>
        {/* <InstapaperShareButton url={`https://telabel-official-q1x2tx72h-ushitaku.vercel.app/posts/${postData.id}`}>
        <Image p="" src={'https://res.cloudinary.com/telabel/image/upload/v1618401644/instergram_oug8df.png'} alt='Instagram'
                width={''} height={''} />
        </InstapaperShareButton> */}
      </Flex>
          <Link href="/posts">
            <Button>← 記事一覧に戻る</Button>
          </Link>
    </Layout>
    )
  }

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }