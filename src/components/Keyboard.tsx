import React from "react";

import { Center } from "@chakra-ui/react";

export default function Keyboard({}) {
  const rowOne = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const rowTwo = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const rowThree = ["Z", "X", "C", "V", "B", "N", "M"];
  return (
    <Center>
      <Center>
        {rowOne.map((letter, index) => {
          <Center w="1vw" h="3vh" bg="beige.faded">
            {letter}
          </Center>;
        })}
      </Center>
    </Center>
  );
}
