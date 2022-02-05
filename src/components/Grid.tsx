import React from "react";

import { Box, Flex, Center, Text } from "@chakra-ui/react";

interface Props {
  grid: string[][];
}

export default function Grid({ grid }: Props) {
  return (
    <Box>
      {grid.map((row, index) => {
        return (
          <Flex key={index}>
            {row.map((letter, i) => {
              return (
                <Center
                  w="4rem"
                  h="4rem"
                  border="2px"
                  borderColor="beige.faded"
                  borderRadius="5"
                  m={1}
                  key={i}
                >
                  <Text fontWeight="bold" fontSize="1.4rem">
                    {letter}
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
