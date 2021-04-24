import React from "react";
import { chakra, Box, Flex, Button, Link, Image } from "@chakra-ui/react";


const BlogLink = () => {
    return (
        <>
        <Box mb="40" textAlign="center">
        <Link href="posts">
        <Button size="lg" border="2px"
        borderColor="gray">他の記事も見てみる</Button>
        </Link>
        </Box>
        </>
    )
}

export default BlogLink