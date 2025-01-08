import Link from "@/components/common/Link";
import { Flex, Box, styled, Container } from "styled-system/jsx";

export default function Layout({ children }) {
  return (
    <styled.main color="theme.white">
      <styled.nav bg="theme.blue" color="theme.black">
        <Container maxW="1200px" py="4">
          <Flex justify="space-between" align="center">
            <Box textStyle="h3">
              <styled.h3 textStyle="h4">Liz H Bingo </styled.h3>
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
