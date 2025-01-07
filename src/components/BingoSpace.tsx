"use client";

import { styled } from "styled-system/jsx";

export default function BingoSpace({ space }: { space: any }) {
  return (
    <styled.div
      w="full"
      bg={space.marked ? "red.200" : "transparent"}
      textAlign="center"
    >
      <styled.h3
        py="0.5"
        textStyle="h3"
        color={space.marked ? "black" : "gray.300"}
      >
        {space.value}
      </styled.h3>
    </styled.div>
  );
}
