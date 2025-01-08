import { Flex, Grid, GridItem, styled } from "styled-system/jsx";

import Button from "@/components/common/Button";

function CalloutColumn({ id, callout }) {
  return (
    <>
      <GridItem colSpan={1}>
        <styled.label
          htmlFor={`callout-${id}`}
          display="inline"
          px="2"
          fontWeight="bold"
        >
          {id + 1}
        </styled.label>
      </GridItem>
      <GridItem colSpan={11}>
        <styled.input
          type="text"
          id={`callout-${id}`}
          name={id}
          defaultValue={callout}
          px="1"
          w="full"
          display="inline"
          borderWidth="2px"
          borderColor="bingo.white"
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
    <styled.div color="bingo.white">
      <styled.h3 textStyle="h3"> Update Bingo Calls</styled.h3>
      {/* <styled.label>Bulk update by pasting a csv</styled.label>
      <styled.textarea
        w="full"
        borderWidth="2px"
        borderColor="bingo.white"
        borderRadius="lg"
        onChange={bulkUpdateCallouts}
      />
      <Button
      >
        Bulk Update
      </Button>
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
            <Button type="reset" w="full">
              Reset
            </Button>
            <Button type="submit" w="full">
              Save
            </Button>
          </Flex>
        </form>
        <Button mt="2" w="full" onClick={closeModal}>
          Exit
        </Button>
      </styled.div>
    </styled.div>
  );
}
