import React from "react";

import { Box, Flex } from "@chakra-ui/react";

interface Props {
  grid: number[][];
}

export default function Grid({ grid }: Props) {
  return (
    <Box>
      {grid.map((row, index) => {
        return (
          <Flex key={index}>
            {row.map((cell, i) => {
              return (
                <Box
                  w="4rem"
                  h="4rem"
                  border="2px"
                  borderColor="beige.faded"
                  borderRadius="10"
                  m={1}
                  key={i}
                ></Box>
              );
            })}
          </Flex>
        );
      })}
    </Box>
  );
}
