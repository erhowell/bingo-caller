"use client";

import { useEffect, useState } from "react";
import { Box, Container, Flex, styled } from "styled-system/jsx";

import MasterBoard from "@/components/MasterBoard";
import ReusableModal from "@/components/Modals/ReusableModal";
import ResetModalContent from "@/components/Modals/ResetModalContent";
import BingoControlSection from "@/components/BingoControlSection";
import PregameSettings from "@/components/PregameSetttings";
import DEFAULT_BINGO_CALLS from "@/lib/callouts";
import { css } from "styled-system/css";

function generateBingoBalls(max) {
  const balls: BingoBall[] = [];

  for (let idx: number = 1; idx <= max; idx++) {
    if (idx <= max / 5) {
      balls.push({ column: "B", value: idx });
    } else if (idx <= (max / 5) * 2) {
      balls.push({ column: "I", value: idx });
    } else if (idx <= (max / 5) * 3) {
      balls.push({ column: "N", value: idx });
    } else if (idx <= (max / 5) * 4) {
      balls.push({ column: "G", value: idx });
    } else {
      balls.push({ column: "O", value: idx });
    }
  }

  for (let i = balls.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [balls[i], balls[j]] = [balls[j], balls[i]]; // Swap elements
  }
  return balls;
}

function createRows(n: number, m: number) {
  const row: BoardColumn = { numbers: [] };
  for (n; n <= m; n++) {
    row.numbers.push({ value: n, marked: false });
  }
  return row;
}
export default function BingoCallerPage() {
  const [maxBallCount, setMaxBallCount] = useState(75);
  const [displayCallouts, setDisplayCallouts] = useState(true);
  const [callouts, setCallouts] = useState(DEFAULT_BINGO_CALLS);

  const [callIdx, setCallIdx] = useState(-1);
  const [board, setBoard] = useState(null);
  const [balls, setBalls] = useState(generateBingoBalls(75));
  const [isModalOpen, toggleOpenModal] = useState(false);

  useEffect(() => {
    if (callIdx > -1) {
      setBoard((prev) => {
        const ball = balls[callIdx];
        const updatedBoard = { ...prev }; // Shallow copy of the board
        const column = updatedBoard[ball.column];
        const idx = (Number(ball.value) - 1) % (maxBallCount / 5);

        // Create a new array for the numbers to avoid mutating state
        updatedBoard[ball.column] = {
          ...column,
          numbers: column.numbers.map(
            (num, i) => (i === idx ? { ...num, marked: true } : num) // Update the specific number
          ),
        };

        return updatedBoard; // Return the updated board object
      });
    } else {
      const increment = maxBallCount / 5;

      setBoard({
        B: createRows(1, increment),
        I: createRows(increment + 1, increment * 2),
        N: createRows(increment * 2 + 1, increment * 3),
        G: createRows(increment * 3 + 1, increment * 4),
        O: createRows(increment * 4 + 1, increment * 5),
      });
    }
  }, [callIdx, maxBallCount]);

  const resetBoard = () => {
    setBalls(generateBingoBalls(maxBallCount));

    setCallIdx(-1);
    closeModule();
  };
  const closeModule = () => toggleOpenModal(false);
  const startGame = () => {
    if (callIdx < 0) {
      setBalls(generateBingoBalls(maxBallCount));
      setCallIdx(callIdx + 1);
    }
  };
  const handleResetButtonClick = () => {
    if (callIdx >= 0) {
      toggleOpenModal(true);
    } else {
      startGame();
    }
  };
  return (
    <styled.section w="full" color="slate.200" id="main">
      <ReusableModal
        isOpen={isModalOpen}
        onClose={closeModule}
        modalStyle={css.raw({ height: "fit-content" })}
      >
        <ResetModalContent onClose={closeModule} resetGame={resetBoard} />{" "}
      </ReusableModal>
      <Container maxW="1200px" pt="8" pb="20">
        <styled.h1 textStyle="h1">Bingo</styled.h1>
        {callIdx < 0 && (
          <PregameSettings
            ballCount={maxBallCount}
            displayCallouts={displayCallouts}
            callouts={callouts}
            setCallouts={setCallouts}
            startGame={startGame}
            setBallCount={setMaxBallCount}
            setDisplayCallouts={setDisplayCallouts}
          />
        )}
        {callIdx > -1 && (
          <Flex w="full" gap="8" flexDir="column">
            <BingoControlSection
              callIdx={callIdx}
              callouts={callouts}
              balls={balls}
              setCallIdx={setCallIdx}
              handleResetButtonClick={handleResetButtonClick}
            />

            <Box w="full">
              {callIdx >= 0 && <MasterBoard key={callIdx} board={board} />}
            </Box>
          </Flex>
        )}
      </Container>
    </styled.section>
  );
}
