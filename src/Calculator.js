import React, { useState, useContext, createContext } from "react";
import { Box } from "@chakra-ui/react";

import OutputSection from "./OutputSection";
import InputSection from "./InputSection";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export default function Calculator() {
  const [currentCalculation, setCalculation] = useState("");
  const [isResult, setIsResult] = useState(false);
  const styles = {
    outputStyles: {
      color: "#eee",
      backgroundColor: "#333a4d"
    },
    inputStyles: {
      fontColor: "#333a4d",
      baseColor: "#eee",
      hoverColor: "#ddd",
      accentColor1: "#cdcdcd",
      hoverColor1: "#bbb",
      accentColor2: "#fda170",
      hoverColor2: "#ED9768",
      accentColor3: "#f88d6d",
      hoverColor3: "#ED8768"
    }
  };

  return (
    <AppContext.Provider
      value={{ currentCalculation, setCalculation, isResult, setIsResult }}
    >
      <Box
        w="300px"
        h="400px"
        borderRadius="2xl"
        boxShadow="0px 0px 100px -15px rgba(0,0,0,0.9)"
        cursor="pointer"
        userSelect="none"
      >
        <OutputSection
          output={currentCalculation}
          style={styles.outputStyles}
        />
        <InputSection style={styles.inputStyles} />
      </Box>
    </AppContext.Provider>
  );
}
