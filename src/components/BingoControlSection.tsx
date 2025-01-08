import { Box, Flex, styled, VStack } from "styled-system/jsx";
import { useState } from "react";

import Button from "@/components/common/Button";
import BingoBall from "@/components/BingoBall";
import PreviousCalls from "@/components/PreviousCalls";
import Input from "@/components/common/Input";

export default function BingoControlSection({
  callIdx,
  balls,
  callouts,
  setCallIdx,
  handleResetButtonClick,
}: {
  callIdx: number;
  balls: BingoBall[];
  callouts: string[];
  setCallIdx: (_idx) => void;
  handleResetButtonClick: () => void;
}) {
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [intervalSeconds, setIntervalSeconds] = useState(5);

  const handleNextBall = () => {
    if (callIdx < balls?.length - 1) {
      setCallIdx((prevIdx) => prevIdx + 1);
    } else {
      if (intervalId) clearInterval(intervalId); // Stop auto-calling when all balls are called
    }
  };

  const toggleAutoCall = () => {
    if (!intervalId) {
      //play
      const id = setInterval(handleNextBall, intervalSeconds * 1000);
      setIntervalId(id);
    } else {
      //stop
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  return (
    <Flex
      gap="4"
      flexDir={["column", null, null, "row"]}
      textAlign="center"
      justify="start"
      alignContent="stretch"
    >
      <Flex
        gap="2"
        flexDir={["column", null, null, "column"]}
        w="full"
        flex="1"
      >
        <Button onClick={handleResetButtonClick}>Reset Game</Button>
        <VStack
          w="full"
          minH="200px"
          p="4"
          borderWidth="2px"
          borderColor="theme.white"
          borderRadius="lg"
        >
          <styled.h5 textStyle="h5">current ball:</styled.h5>

          <BingoBall
            ball={
              callIdx < 0
                ? ({ column: "BINGO", value: "BINGO" } as BingoBall)
                : balls[callIdx]
            }
            ballSize="lg"
          />

          <styled.p>{callouts[Number(balls[callIdx].value) - 1]}</styled.p>
        </VStack>
      </Flex>

      <Flex
        flex="2"
        flexDir="column"
        gap="2"
        align="stretch"
        visibility={callIdx < 0 ? "hidden" : "visible"}
      >
        <styled.div>
          <styled.div>
            <Flex
              flexDir={["column", null, null, "row"]}
              gap="2"
              justify="space-between"
            >
              <Box>
                <Button
                  disabled={!!intervalId || callIdx < 0}
                  _disabled={{
                    color: "theme.white",
                    borderColor: "theme.white",
                  }}
                  onClick={() => {
                    if (callIdx < balls?.length) {
                      setCallIdx(callIdx + 1);
                    }
                  }}
                >
                  Next Ball
                </Button>
              </Box>
              <Flex
                gap={["0", null, null, "3"]}
                justify={["space-around", null, null, "space-between"]}
                align="center"
              >
                <Box>
                  <styled.p
                    textStyle="p"
                    fontWeight="bold"
                    display="inline"
                    px="2"
                  >
                    Autoplay Speed:
                  </styled.p>
                  <Input
                    type="number"
                    defaultValue={5}
                    width="10"
                    borderWidth="2px"
                    borderColor="theme.white"
                    borderRadius="lg"
                    textAlign="center"
                    onChange={(e) => setIntervalSeconds(Number(e.target.value))}
                  />
                  <styled.label px="0.5">seconds</styled.label>
                </Box>
                <Box>
                  <Button
                    hidden={callIdx < 0}
                    onClick={toggleAutoCall}
                    display="inline"
                  >
                    {!!intervalId ? "Stop" : "Start"} Autoplay
                  </Button>
                </Box>
              </Flex>
            </Flex>
          </styled.div>
        </styled.div>
        <Box
          w="full"
          h={["150px", null, null, "full"]}
          p="4"
          borderWidth="2px"
          borderColor="theme.white"
          borderRadius="lg"
        >
          <PreviousCalls balls={balls} callIdx={callIdx} />
        </Box>
      </Flex>
    </Flex>
  );
}
