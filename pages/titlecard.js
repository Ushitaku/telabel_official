import React from 'react'
import Date from '../components/date'
import Link from 'next/link'
import {Box, Flex, Spacer, } from '@chakra-ui/react'
import { getSortedPostsData } from '../lib/posts'

const TitleCard = ({post}) => {
    const title = post[0];
    const location = post[1];
    const date = post[2];
    return (
        <>
        <p>{title}</p>
        <p>{location}</p>
        <p>{date}</p>
        </>
    )
}

export default TitleCard
