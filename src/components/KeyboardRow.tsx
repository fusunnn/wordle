import React from "react";

import { Center, Text } from "@chakra-ui/react";

type Props = {
  letters: string[];
  handleInput: (letter: string) => void;
};

export default function KeyboardRow({ letters, handleInput }: Props) {
  return (
    <Center>
      {letters.map((letter: string, index: number) => {
        return (
          <Center
            w="3rem"
            borderRadius=".5rem"
            m=".25rem"
            h="3.5rem"
            bg="beige.faded"
            cursor="pointer"
            onClick={() => handleInput(letter)}
            key={index}
          >
            <Text fontWeight="bold" fontSize="1.1rem">
              {letter}
            </Text>
          </Center>
        );
      })}
    </Center>
  );
}
