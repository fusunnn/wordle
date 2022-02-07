import React from "react";

import { Box, Flex, Center, Text } from "@chakra-ui/react";

import { Cell } from "../types/cell";

interface Test {
  letter: string;
  status: string;
}
interface Props {
  grid: Cell[][];
}

export default function Grid({ grid }: Props) {
  return (
    <Box>
      {grid.map((row, index) => {
        return (
          <Flex key={index}>
            {row.map((item, i) => {
              return (
                <Center
                  w="4rem"
                  h="4rem"
                  border="2px"
                  borderColor="beige.faded"
                  borderRadius="5"
                  m={1}
                  key={i}
                  backgroundColor={
                    item.status === "inactive"
                      ? "transparent"
                      : item.status === "incorrect"
                      ? "red"
                      : item.status === "half"
                      ? "orange"
                      : "green"
                  }
                >
                  <Text fontWeight="bold" fontSize="1.4rem">
                    {item.letter}
                  </Text>
                </Center>
              );
            })}
          </Flex>
        );
      })}
    </Box>
  );
}
