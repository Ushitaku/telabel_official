import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'
import {Box, Flex, Image, } from '@chakra-ui/react'

export default function Post({ postData }) {
    return (
    <Layout>
        <Head>
        <title>{postData.title}</title>
        </Head>
        <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <h2>{postData.location}</h2>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>

      <Flex justifyContent="flex-end" mt="4" >
        <Image p="" src={'https://res.cloudinary.com/telabel/image/upload/v1618401644/facebook_erc9dv.png'} alt='Facebook'
                width={''} height={''} />
        <Image p="" src={'https://res.cloudinary.com/telabel/image/upload/v1618401644/twitter_wzmz9k.png'} alt='Twitter'
                width={''} height={''} />
        <Image p="" src={'https://res.cloudinary.com/telabel/image/upload/v1618401644/instergram_oug8df.png'} alt='Instagram'
                width={''} height={''} />
      </Flex>
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