import React, { useEffect, useState } from "react";

import { fetchEncrypted } from "../helpers/api";
import { checkAnswer } from "../helpers/check";
import { makeGrid } from "../helpers/grid";
import { words } from "../constants/possiblewords";

import { Flex, Text, Center } from "@chakra-ui/react";

import Grid from "../components/Grid";
import Keyboard from "../components/Keyboard";

import { Cell } from "../types/cell";
import { decrypt } from "../helpers/decrypt";

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
      if (words.includes(currGuess.toLowerCase())) {
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
          setIsPlaying(false);
        } else if (currGuessNumber === 5) {
          setHasLost(true);
          setIsPlaying(false);
        } else {
          setCurrGuessNumber((prevState) => {
            return prevState + 1;
          });
          setCurrGuess("");
        }
      } else {
        console.log("not a word");
      }
    }
  }

  if (isLoading) {
    return <Center>Loading...</Center>;
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
      <Flex justify="center" align="center" direction="column">
        {!isPlaying && (
          <Center
            w="100vw"
            h="100vh"
            position="absolute"
            top={0}
            left={0}
            bg="rgba(0,0,0,0.3)"
          >
            <Center
              bg="beige.main"
              h="3rem"
              w="10rem"
              borderRadius="1rem"
              textAlign="center"
              position="absolute"
              transition="0.3s"
            >
              <Text color="black" fontWeight="bold" fontSize="1.2rem">
                {hasWon ? decrypt(encryptedWord) : "You lost"}
              </Text>
            </Center>
          </Center>
        )}
        <Grid grid={grid} />
      </Flex>

      <Keyboard
        handleInput={(letter: string) => handleKeyboardInput(letter)}
        handleDeleteChar={handleDeleteChar}
        handleEnterKey={handleEnterKey}
      />
    </Flex>
  );
}
