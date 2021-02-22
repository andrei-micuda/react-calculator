import React, { useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import textFit from "textfit";

import { useAppContext } from "./Calculator";

export default function OutputSection({ output, style }) {
  const { isResult } = useAppContext();

  const renderOutput = (output) => {
    if (!isResult) return output.replaceAll("*", "×").replaceAll("/", "÷");

    return isNaN(output) ? "Err." : output;
  };

  useEffect(() => {
    textFit(document.getElementById("outputSection"), { maxFontSize: 48 });
  }, [output, isResult]);

  return (
    <Flex
      style={style}
      id="outputSection"
      flexDirection="row-reverse"
      alignItems="flex-end"
      h="25%"
      px="15px"
      fontSize="48px"
    >
      {renderOutput(output)}
    </Flex>
  );
}
