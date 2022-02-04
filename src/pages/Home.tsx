import React, { useEffect, useState } from "react";

import { fetchEncrypted } from "../helpers/api";
import { decrypt } from "../helpers/decrypt";

import { Flex, Text } from "@chakra-ui/react";

import Grid from "../components/Grid";
import Keyboard from "../components/Keyboard";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [encryptedWord, setEncryptedWord] = useState<string>("");

  useEffect(() => {
    fetchEncrypted()
      .then((res: string) => {
        decrypt(res);
        setEncryptedWord(res);
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err: Error) => {
        throw err;
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
