import React, { useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import textFit from "textfit";

import { useAppContext } from "./Calculator";

export default function OutputSection({ output, style }) {
  const { isResult } = useAppContext();

  const renderOutput = (output) => {
    if (!isResult) return output.replaceAll("*", "×").replaceAll("/", "÷");
    let res = Math.round((Number(output) + Number.EPSILON) * 100) / 100;

    return isNaN(res) ? "Err." : res;
  };

  useEffect(() => {
    textFit(document.getElementById("outputSection"), { maxFontSize: 64 });
  }, [output, isResult]);

  return (
    <Flex
      style={style}
      id="outputSection"
      flexDirection="row-reverse"
      alignItems="flex-end"
      h="35%"
      px="15px"
      fontSize="64px"
      borderTopRadius="2xl"
    >
      {renderOutput(output)}
    </Flex>
  );
}
