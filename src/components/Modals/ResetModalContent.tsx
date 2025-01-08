import { styled } from "styled-system/jsx";

import Button from "@/components/common/Button";

export default function ResetModalContent({ resetGame, onClose }) {
  return (
    <styled.div>
      <styled.p>Are you sure you want to reset the game?</styled.p>
      <Button visual="outline" w="full" my="4" onClick={onClose}>
        Cancel
      </Button>
      <Button w="full" onClick={resetGame}>
        Reset Game
      </Button>
    </styled.div>
  );
}
