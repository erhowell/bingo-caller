import { useState } from "react";
import { Flex, Grid, GridItem, styled } from "styled-system/jsx";

function CalloutColumn({ id, callout }) {
  return (
    <>
      <GridItem colSpan={1}>
        <styled.label display="inline" px="2" fontWeight="bold">
          {id + 1}
        </styled.label>
      </GridItem>
      <GridItem colSpan={11}>
        <styled.input
          type="text"
          name={id}
          defaultValue={callout}
          px="1"
          w="full"
          display="inline"
          borderWidth="2px"
          borderColor="slate.500"
          borderRadius="lg"
        />
      </GridItem>
    </>
  );
}

export default function CalloutModalContent({
  maxBallCount,
  callouts,
  setCallouts,
  closeModal,
}) {
  // const [bulkUpdateText, setBulkUpdateText] = useState("");
  // const [bulkUpdateError, setBulkUpdateError] = useState("");
  // const [tempCallouts, setTempCallouts] =useState(callouts)
  const saveCallouts = (formData: FormData) => {
    setCallouts(Array.from(formData.values()));
    closeModal();
  };

  // const bulkUpdateCallouts = (e) => {
  //   const textAreaText = e.target.value;
  //   if (textAreaText) {
  //     try {
  //       let newCallouts = textAreaText.split(",");
  //       for (let idx = 0; idx < maxBallCount; idx++) {
  //        if( idx<maxBallCount.length ){

  //        }else{
  //         newCallouts.concat(callouts[0])
  //        }
  //       }
  //     } catch (err) {
  //       setBulkUpdateError("There was a parsing error: " + err);
  //     }
  //   }
  // };

  return (
    <styled.div>
      <styled.h3 textStyle="h3"> Update Bingo Calls</styled.h3>
      {/* <styled.label>Bulk update by pasting a csv</styled.label>
      <styled.textarea
        w="full"
        borderWidth="2px"
        borderColor="slate.500"
        borderRadius="lg"
        onChange={bulkUpdateCallouts}
      />
      <styled.button
        py="2"
        px="4"
        w="full"
        borderWidth="2px"
        borderColor="slate.500"
        borderRadius="full"
        textStyle="h5"
      >
        Bulk Update
      </styled.button>
      <styled.p>Or update individually</styled.p> */}
      <styled.div py="4">
        <form action={saveCallouts}>
          <Grid columns={12} alignItems="center" py="2">
            {callouts.slice(0, maxBallCount).map((callout, idx) => (
              <CalloutColumn
                key={`callout-${idx}`}
                id={idx}
                callout={callout}
              />
            ))}
          </Grid>
          <Flex gap="2" py="2">
            {" "}
            <styled.button
              type="reset"
              py="2"
              px="4"
              w="full"
              borderWidth="2px"
              borderColor="slate.500"
              borderRadius="full"
              textStyle="h5"
            >
              Reset
            </styled.button>
            <styled.button
              type="submit"
              py="2"
              px="4"
              w="full"
              borderWidth="2px"
              borderColor="slate.500"
              borderRadius="full"
              textStyle="h5"
            >
              Save
            </styled.button>
          </Flex>
        </form>
        <styled.button
          py="2"
          px="4"
          mt="2"
          w="full"
          borderWidth="2px"
          borderColor="slate.500"
          borderRadius="full"
          textStyle="h5"
          onClick={closeModal}
        >
          Exit
        </styled.button>
      </styled.div>
    </styled.div>
  );
}
