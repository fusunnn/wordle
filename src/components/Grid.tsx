import React from "react";

import { Center, Box, Flex } from "@chakra-ui/react";

function makeGrid() {
  const grid = [];
  for (let i = 0; i < 6; i++) {
    let row = [];
    for (let j = 0; j < 5; j++) {
      row.push(0);
    }
    grid.push(row);
  }
  return grid;
}

export default function Grid({}) {
  const grid: number[][] = makeGrid();
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
