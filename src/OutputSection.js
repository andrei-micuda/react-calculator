import React from "react";
import { Flex } from "@chakra-ui/react";

export default function OutputSection({ output, style }) {
  const renderOutput = (output) => {
    return output.replaceAll("*", "×").replaceAll("/", "÷");
  };

  return (
    <Flex
      style={style}
      flexDirection="row-reverse"
      alignItems="flex-end"
      fontSize="2.5rem"
      h="35%"
      px="15px"
      borderTopRadius="2xl"
    >
      <span>{renderOutput(output)}</span>
    </Flex>
  );
}
