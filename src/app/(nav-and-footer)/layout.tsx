import Link from "@/components/Link";
import { Flex, Box, styled, Container } from "styled-system/jsx";

export default function Layout({ children }) {
  return (
    <styled.main>
      <styled.nav bg="lightblue">
        <Container maxW="1200px" py="4">
          <Flex justify="space-between" align="center">
            <Box textStyle="h3">
              <styled.h3>Liz H Bingo </styled.h3>
            </Box>
            <Flex justify="space-around" gap="6">
              <Box>
                <Link
                  href={"/faq"}
                  textStyle="h6"
                  textDecoration="underline"
                  _hover={{ color: "blue.500" }}
                >
                  FAQ
                </Link>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </styled.nav>
      {children}
    </styled.main>
  );
}
