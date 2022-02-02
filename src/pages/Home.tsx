import React, { useEffect, useState } from "react";

import { checkAnswer } from "../helpers/api";
import { hashWord } from "../helpers/encrypt";

import { Flex, Text } from "@chakra-ui/react";

import Grid from "../components/Grid";
import Keyboard from "../components/Keyboard";

export default function Home({}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    checkAnswer("worth").then((res) => {
      console.log(res);
    });
  }, []);

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
      direction="column"
    >
      <Text fontSize="5xl" fontWeight="bold">
        Wordle
      </Text>
      <Grid />
      <Keyboard />
    </Flex>
  );
}
