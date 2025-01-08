"use client";

import { styled } from "styled-system/jsx";

export default function BingoSpace({ space }: { space: any }) {
  return (
    <styled.div w="full" textAlign="center">
      <styled.h3
        py="0.5"
        textStyle="h3"
        color={space.marked ? "white" : "bingo.darkGray"}
      >
        {space.value}
      </styled.h3>
    </styled.div>
  );
}
