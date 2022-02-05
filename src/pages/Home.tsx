import React, { useEffect, useState } from "react";

import { fetchEncrypted } from "../helpers/api";
import { checkAnswer } from "../helpers/check";
import { makeGrid } from "../helpers/grid";

import { Flex, Text } from "@chakra-ui/react";

import Grid from "../components/Grid";
import Keyboard from "../components/Keyboard";

import { Cell } from "../types/cell";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [encryptedWord, setEncryptedWord] = useState<string>("");

  const [currGuess, setCurrGuess] = useState<string>("");
  const [currGuessNumber, setCurrGuessNumber] = useState<number>(0);

  const [grid, setGrid] = useState<Cell[][]>(makeGrid());

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
      console.log("ran");
      for (var i: number = 0; i < 5; i++) {
        console.log("loop");
        const gridCopy = grid.slice();
        if (currGuess[i]) {
          gridCopy[0][i].letter = currGuess[i];
        } else {
          gridCopy[0][i].letter = "";
        }

        console.log(gridCopy);
        setGrid(gridCopy);
      }
    }
  }, [currGuess]);

  //handling interactions with the keyboard
  function handleKeyboardInput(letter: string) {
    console.log("run", currGuess);
    if (currGuess.length <= 5) {
      setCurrGuess((prevState: string) => {
        return prevState + letter;
      });
    }
  }

  function handleDeleteChar() {
    setCurrGuess((prevState) => {
      return prevState.substring(0, prevState.length - 1);
    });
  }

  function handleEnterKey() {
    // const newRow = checkAnswer(encryptedWord, grid[currGuessNumber]);
    // setGrid((prevState) => {
    //   return [...prevState, (prevState[currGuessNumber] = newRow)];
    // });
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

      <Keyboard
        handleInput={(letter: string) => handleKeyboardInput(letter)}
        handleDeleteChar={handleDeleteChar}
        handleEnterKey={handleEnterKey}
      />
    </Flex>
  );
}
