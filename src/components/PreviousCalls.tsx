import { Grid, GridItem, styled } from "styled-system/jsx";

import BingoBall from "@/components/BingoBall";

export default function PreviousCalls({ balls, callIdx }) {
  return (
    <styled.div>
      <styled.h5 textStyle="h5" w="full" pb="4">
        Previous Calls
      </styled.h5>
      <Grid columns={5} gap="3" alignItems="center" justifyItems="center">
        {[1, 2, 3, 4, 5].map((idx) => {
          if (callIdx - idx < 0) {
            return null;
          }
          return (
            <GridItem
              colSpan={1}
              key={`previous-ball-${idx}`}
              py="1"
              alignSelf="center"
            >
              <styled.div hideBelow={"lg"}>
                <BingoBall ball={balls[callIdx - idx]} ballSize="md" />
              </styled.div>
              <styled.div hideFrom={"lg"}>
                <BingoBall ball={balls[callIdx - idx]} ballSize="sm" />
              </styled.div>
            </GridItem>
          );
        })}
      </Grid>
    </styled.div>
  );
}
