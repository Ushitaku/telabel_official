import Head from 'next/head'
import Link from 'next/link'
import Date from '../../components/date'
import Layout, { siteTitle } from '../../components/layout'
import { getSortedPostsData } from '../../lib/posts'
import {Box, Flex, Spacer, Card } from '@chakra-ui/react'


export async function getServerSideProps(context) {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section >
        {allPostsData.map((post) => <Card key={post.id} post={post}/>)
          }
        <Box 
        // bgImage="url('https://res.cloudinary.com/dk2uwbtnl/image/upload/v1618981508/wed/Frame_1_pludwo.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bg="gray"
        w={300}
        h={300}
        align="right"
        >
        <Flex align="right" p="3">
         <Spacer/>
        <Box 
        w="10%"
        h="95%"
        bg="#fff"
        mr="5"
        >
            アイウエオ
        </Box>
        <Box 
        w="10%"
        h="40%"
        bg="#b0c4de"
        mr="5"
        >
            かきくけこ
        </Box>
        </Flex>

        </Box>

      </section>
    </Layout>
  )
}