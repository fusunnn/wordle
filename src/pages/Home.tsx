import React, { useEffect, useState } from "react";

import { fetchEncrypted } from "../helpers/api";
import { decrypt } from "../helpers/decrypt";
import { makeGrid } from "../helpers/grid";

import { Flex, Text } from "@chakra-ui/react";

import Grid from "../components/Grid";
import Keyboard from "../components/Keyboard";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [encryptedWord, setEncryptedWord] = useState<string>("");

  const [currGuess, setCurrGuess] = useState<string>("");
  const [currGuessNumber, setCurrGuessNumber] = useState<number>(0);

  const [grid, setGrid] = useState<string[][]>(makeGrid());

  //fetch word when DOM renders
  useEffect(() => {
    fetchEncrypted()
      .then((res: string) => {
        setEncryptedWord(res);
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err: Error) => {
        throw err;
      });
  }, []);

  //handle updating the grid, updates whenever the current guess is updated
  useEffect(() => {
    //don't update grid if user is typing past 5 characters
    if (currGuess.length <= 5) {
      for (var i: number = 0; i < currGuess.length; i++) {
        const gridCopy = grid.slice();
        gridCopy[currGuessNumber][i] = currGuess[i];
        setGrid(gridCopy);
      }
    }
  }, [currGuess]);

  //handling interactions with the keyboard
  function handleKeyboardInput(letter: string) {
    setCurrGuess((prevState: string) => {
      return prevState + letter;
    });
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Flex
      w="100%"
      h="100%"
      p={4}
      color="beige.main"
      align="center"
      justify="space-between"
      direction="column"
    >
      {/* TITLE */}
      <Text fontSize="5xl" fontWeight="bold">
        Wordle
      </Text>

      <Grid grid={grid} />

      <Keyboard handleInput={(letter: string) => handleKeyboardInput(letter)} />
    </Flex>
  );
}
