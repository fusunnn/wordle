import React from "react";

import { Center, Text } from "@chakra-ui/react";

type Props = {
  letters: string[];
  handleInput: (letter: string) => void;
  bottom?: boolean;
  handleDeleteChar?: () => void;
  handleEnterKey?: () => void;
};

export default function KeyboardRow({
  letters,
  handleInput,
  bottom,
  handleDeleteChar,
  handleEnterKey,
}: Props) {
  return (
    <Center>
      {bottom && (
        <Center
          w="5rem"
          borderRadius=".5rem"
          m=".25rem"
          h="3.5rem"
          bg="beige.faded"
          cursor="pointer"
          userSelect="none"
          onClick={() => handleEnterKey!()}
        >
          <Text fontWeight="bold" fontSize="1.1rem">
            Enter
          </Text>
        </Center>
      )}
      {letters.map((letter: string, index: number) => {
        return (
          <Center
            w="3rem"
            borderRadius=".5rem"
            m=".25rem"
            h="3.5rem"
            bg="beige.faded"
            cursor="pointer"
            userSelect="none"
            onClick={() => handleInput(letter)}
            key={index}
          >
            <Text fontWeight="bold" fontSize="1.1rem">
              {letter}
            </Text>
          </Center>
        );
      })}
      {bottom && (
        <Center
          w="5rem"
          borderRadius=".5rem"
          m=".25rem"
          h="3.5rem"
          bg="beige.faded"
          cursor="pointer"
          userSelect="none"
          onClick={() => handleDeleteChar!()}
        >
          <Text fontWeight="bold" fontSize="1.1rem">
            Delete
          </Text>
        </Center>
      )}
    </Center>
  );
}
