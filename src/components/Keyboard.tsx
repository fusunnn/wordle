import React from "react";

import { Center, Text, Flex } from "@chakra-ui/react";

import KeyboardRow from "./KeyboardRow";

const rowStyle = {
  w: "",
};

interface Props {
  handleInput: (letter: string) => void;
}

export default function Keyboard({ handleInput }: Props) {
  const rowOne = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const rowTwo = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const rowThree = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <Flex direction="column" justify="center" alignItems="center">
      <KeyboardRow
        letters={rowOne}
        handleInput={(letter: string) => handleInput(letter)}
      />
      <KeyboardRow
        letters={rowTwo}
        handleInput={(letter: string) => handleInput(letter)}
      />
      <KeyboardRow
        letters={rowThree}
        handleInput={(letter: string) => handleInput(letter)}
      />
    </Flex>
  );
}
