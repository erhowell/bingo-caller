import { useState } from "react";
import { Flex, styled } from "styled-system/jsx";

import ReusableModal from "./Modals/ReusableModal";
import CalloutModalContent from "./Modals/CalloutModalContent";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { token } from "styled-system/tokens";
import { css } from "styled-system/css";

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
        modalStyle={css.raw({
          width: ["5/6", "1/2", "2/5"],
          height: "4/5",
          overflow: "auto",
        })}
      >
        <CalloutModalContent
          maxBallCount={ballCount}
          callouts={callouts}
          setCallouts={setCallouts}
          closeModal={closeModal}
        />
      </ReusableModal>
      <styled.div w={["full", "1/2"]}>
        <Flex gap="4" align="center">
          <styled.p fontWeight="bold" textStyle="h6">
            Ball Count:
          </styled.p>

          <Flex align="center" gap="1" py="2">
            <Input
              type="radio"
              id="75-balls"
              name="ballCount"
              value="75"
              checked={ballCount == 75}
              onChange={(e) => setBallCount(Number(e.target.value))}
            />
            <styled.label fontWeight="bold"> 75</styled.label>
          </Flex>
          <Flex align="center" gap="1" py="2">
            <Input
              type="radio"
              id="90-balls"
              name="ballCount"
              value="90"
              checked={ballCount == 90}
              onChange={(e) => setBallCount(Number(e.target.value))}
            />
            <styled.label fontWeight="bold"> 90</styled.label>
          </Flex>
        </Flex>
        <Flex align="center" gap="2" py="2">
          <Flex flex="1" align="center" gap="1">
            <Input
              type="checkbox"
              checked={displayCallouts}
              onChange={() => setDisplayCallouts(!displayCallouts)}
            />
            <styled.label fontWeight="bold" textStyle="p">
              {" "}
              Show Calls
            </styled.label>
          </Flex>
          {displayCallouts && (
            <Button
              flex="1"
              visual="secondary"
              onClick={() => toggleCalloutModal(true)}
              textStyle="h6"
            >
              Edit Call outs
            </Button>
          )}
        </Flex>
        <Button onClick={startGame} my="2">
          Start Game
        </Button>
      </styled.div>
    </styled.div>
  );
}
