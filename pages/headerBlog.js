import React from "react";
import { chakra, Box, Flex, useColorModeValue, Link, Image } from "@chakra-ui/react";

const HeaderBlog = () => {
  return (
    <Flex
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg={useColorModeValue("white", "gray.800")}
        mx={{ lg: 8 }}
        display={{ lg: "flex" }}
        maxW={{ lg: "5xl" }}
        shadow={{ lg: "lg" }}
        rounded={{ lg: "lg" }}
      >
        <Box w={{ lg: "50%" }}>
          <Box
            h={{ base: 64, lg: "full" }}
            rounded={{ lg: "lg" }}
            bgSize="cover"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/telabel/image/upload/v1619176884/catmain_2x_omyik9.png')",
            }}
          ></Box>
        </Box>

        <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
          <chakra.h2
            fontSize={{ base: "2xl", md: "3xl" }}
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
            めっちゃ猫がいる寺{" "}
          </chakra.h2>
          <chakra.p mt={4} color={useColorModeValue("gray.600", "gray.400")}>
          めっちゃ猫がいる寺めっちゃ猫がいる寺めっちゃ猫がいる寺めっちゃ猫がいる寺めっちゃ猫がいる寺
          めっちゃ猫がいる寺めっちゃ猫がいる寺めっちゃ猫がいる寺めっちゃ猫がいる寺めっちゃ猫がいる寺
          めっちゃ猫がいる寺めっちゃ猫がいる寺めっちゃ猫がいる寺めっちゃ猫がいる寺めっちゃ猫がいる寺
          めっちゃ猫がいる寺めっちゃ猫がいる寺めっちゃ猫がいる寺めっちゃ猫がいる寺めっちゃ猫がいる寺
          </chakra.p>

          <Box mt={8}>
            <Link
              href="posts/01"
              bg="gray.900"
              color="gray.100"
              px={5}
              py={3}
              fontWeight="semibold"
              rounded="lg"
              _hover={{ bg: "gray.80" }}
            >
              記事を見る
            </Link>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default HeaderBlog;