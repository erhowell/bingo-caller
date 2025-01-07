import { useState } from "react";
import { Flex, styled } from "styled-system/jsx";

import ReusableModal from "./Modals/ReusableModal";
import CalloutModalContent from "./Modals/CalloutModalContent";

export default function PregameSettings({
  ballCount,
  displayCallouts,
  callouts,
  setCallouts,
  startGame,
  setBallCount,
  setDisplayCallouts,
}) {
  const [isCalloutModalOpen, toggleCalloutModal] = useState(false);
  const closeModal = () => toggleCalloutModal(false);
  return (
    <styled.div>
      <ReusableModal
        isOpen={isCalloutModalOpen}
        onClose={closeModal}
        style={{
          content: {
            width: "30%",
            height: "100%",
            overflow: "auto",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <CalloutModalContent
          maxBallCount={ballCount}
          callouts={callouts}
          setCallouts={setCallouts}
          closeModal={closeModal}
        />
      </ReusableModal>
      <styled.div w={["full", "1/2"]}>
        <Flex gap="4">
          <styled.p fontWeight="bold">Ball Count:</styled.p>
          <styled.div>
            <styled.input
              type="radio"
              id="75-balls"
              name="ballCount"
              value="75"
              checked={ballCount == 75}
              onChange={(e) => setBallCount(Number(e.target.value))}
            />
            <styled.label fontWeight="bold"> 75</styled.label>
          </styled.div>
          <styled.div>
            <styled.input
              type="radio"
              id="90-balls"
              name="ballCount"
              value="90"
              checked={ballCount == 90}
              onChange={(e) => setBallCount(Number(e.target.value))}
            />
            <styled.label fontWeight="bold"> 90</styled.label>
          </styled.div>
        </Flex>
        <Flex align="stretch" gap="2" py="4">
          <styled.div>
            <styled.input
              type="checkbox"
              checked={displayCallouts}
              onChange={() => setDisplayCallouts(!displayCallouts)}
            />
            <styled.label fontWeight="bold"> Show Calls</styled.label>
          </styled.div>
          {displayCallouts && (
            <styled.button
              py="1"
              px="4"
              borderWidth="2px"
              borderColor="slate.500"
              borderRadius="full"
              onClick={() => toggleCalloutModal(true)}
              textStyle="h6"
            >
              Edit Call outs
            </styled.button>
          )}
        </Flex>
        <styled.button
          py="2"
          px="4"
          w="full"
          borderWidth="2px"
          borderColor="slate.500"
          borderRadius="full"
          onClick={startGame}
          textStyle="h5"
        >
          Start Game
        </styled.button>
      </styled.div>
    </styled.div>
  );
}
