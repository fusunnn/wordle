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
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [hasWon, setHasWon] = useState<boolean>(false);
  const [hasLost, setHasLost] = useState<boolean>(false);

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
      let tempGrid = [...grid];
      for (let i = 0; i < tempGrid[currGuessNumber].length; i++) {
        if (currGuess[i]) {
          tempGrid[currGuessNumber][i].letter = currGuess[i];
        } else {
          tempGrid[currGuessNumber][i].letter = "";
        }
      }
      setGrid(tempGrid);
    }
  }, [currGuess]);

  //handling interactions with the keyboard
  function handleKeyboardInput(letter: string) {
    if (currGuess.length < 5) {
      setCurrGuess((prevState) => {
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
    if (currGuess.length === 5) {
      const { newRow, hasWon } = checkAnswer(
        encryptedWord,
        grid[currGuessNumber]
      );
      setGrid((prevState) => {
        prevState[currGuessNumber] = newRow;
        return prevState;
      });
      if (hasWon) {
        setHasWon(true);
      } else if (currGuessNumber === 5) {
        setHasLost(true);
      } else {
        setCurrGuessNumber((prevState) => {
          return prevState + 1;
        });
        setCurrGuess("");
      }
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (hasWon) {
    return <div>You won!</div>;
  }
  if (hasLost) {
    return <div>You Lost!</div>;
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
