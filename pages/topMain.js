import React from 'react'
import {Box, Heading } from "@chakra-ui/react"

const TopMain = () => {
    return (
        <>
        <Box w="full" textAlign="center" bg="#27214D" color="white">
        <Heading as="h3" size="sg" isTruncated>
        お寺をラベリングしていくサイト
        </Heading>
        <Heading as="h1" size="4xl" isTruncated>
        テラベル
        </Heading>
        </Box>
        </>
    )
}

export default TopMain
