import Head from 'next/head'
import Link from 'next/link'
import Date from '../../components/date'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/posts'
import {Box, Flex, Spacer, Grid, Button, Image } from '@chakra-ui/react'

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
    <>
    {/* <Layout home> */}
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Box p='20' bg='#27214D' align='center'>
      <Image p="" src={'https://res.cloudinary.com/telabel/image/upload/v1619105306/articletitle_jvcnlp.svg'} alt='Facebook'
                width={'397'} height={'54'} />
      </Box>
      <Box bg='#27214D' w="100%">
          {/* {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li> */}
          {allPostsData.map((({id,date,title,location,cardImage})=>
    <Flex justifyContent="space-around">
            <Link href={`/posts/${id}`}>
          <Box 
        bgImage={`url(${cardImage})`}
        bgPosition="center" bgRepeat="no-repeat"
        w={300} h={300} align="right">
        <Flex align="right" p="3">
      <Spacer/>
        <Box fontSize="lg" w="10%" h="95%" bg="#fff" mr="5" align="center">
        {title}
        </Box>
        <Box fontSize="xl" color="white" w="10%" h="40%" bg="#403299" mr="5" align="center">
        {location}
        </Box>
        </Flex>
        </Box>
        </Link>
    </Flex>
        ))}
        <Box m="20" textAlign="center">
        <Link href="/">
        <Button size="lg" border="2px"
        borderColor="gray">TOPに戻る</Button>
        </Link>
        </Box>
        </Box>
    </>
  )
}

// import Head from 'next/head'
// import Link from 'next/link'
// import Date from '../../components/date'
// import Layout, { siteTitle } from '../../components/layout'
// import { getSortedPostsData } from '../../lib/posts'
// import {Box, Flex, Spacer } from '@chakra-ui/react'
// import TitleCard from '../titlecard'

// export async function getServerSideProps(context) {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }

// export default function Home({ allPostsData }) {
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <Box >
//       {allPostsData.map(({id,title,location,date}) => <TitleCard key={id} post={[title,location,date]}/>)}
//       </Box>
//     </Layout>
//   )
// }