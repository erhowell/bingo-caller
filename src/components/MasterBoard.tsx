import { styled, Flex, Box } from "styled-system/jsx";
import BingoSpace from "./BingoSpace";

export default function MasterBoard({ board }: { board: Board }) {
  return (
    <Flex w="full" flexDir={["row", null, null, "column"]} gap="2">
      {Object.keys(board).map((key) => (
        <Box key={`column-${key}`} flex="1">
          <Flex flexDir={["column", null, null, "row"]} align="center">
            <Box flex="1" textAlign="center">
              <styled.h2 textStyle="h2">{key}</styled.h2>
            </Box>
            {board[key].numbers.map((space) => (
              <Box flex="1" key={`${key}-${space.value}`}>
                <BingoSpace space={space} />
              </Box>
            ))}
          </Flex>
        </Box>
      ))}
    </Flex>
  );
}
