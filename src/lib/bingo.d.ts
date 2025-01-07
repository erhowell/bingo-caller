type BingoSettings = {
  balls: "70" | "90";
  freeSpace: boolean;
};

type BingoBall = {
  column: "B" | "I" | "N" | "G" | "O" | "BINGO";
  value: number | string;
  // name: string
};

type BoardSpace = {
  value: "string" | number;
  marked: boolean;
};

type BoardColumn = {
  numbers: BoardSpace[];
};

type Board = {
  B: BoardColumn;
  I: BoardColumn;
  N: BoardColumn;
  G: BoardColumn;
  O: BoardColumn;
};

type Game = {
  currentCall: number;
  callList: number[];
};
