import { styled } from "styled-system/jsx";

export default function ResetModalContent({ resetGame, onClose }) {
  return (
    <styled.div>
      <styled.p>Are you sure you want to reset the game?</styled.p>
      <styled.button
        py="2"
        px="4"
        w="full"
        my="4"
        borderWidth="2px"
        borderColor="slate.500"
        borderRadius="full"
        onClick={onClose}
        textStyle="h5"
      >
        Cancel
      </styled.button>
      <styled.button
        py="2"
        px="4"
        w="full"
        borderWidth="2px"
        borderColor="slate.500"
        borderRadius="full"
        onClick={resetGame}
        textStyle="h5"
      >
        Reset Game
      </styled.button>
    </styled.div>
  );
}
