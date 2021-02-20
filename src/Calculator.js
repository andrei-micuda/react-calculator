import React, { useState, useContext, createContext } from "react";
import { Box } from "@chakra-ui/react";

import OptionsMenu from "./OptionsMenu";
import OutputSection from "./OutputSection";
import InputSection from "./InputSection";
import HistoryOverlay from "./HistoryOverlay";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export default function Calculator() {
  const [currentCalculation, setCalculation] = useState("");
  const [isResult, setIsResult] = useState(false);
  const [historyOverlayActive, setHistoryOverlayActive] = useState(false);
  const [history, setHistory] = useState([]);

  // "2+5=7",
  // "17/3=21.2",
  // "25/5+3=8",
  // "17+3/2+4=9",
  // "2+5=7",
  // "17/3=21.2"

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
      value={{
        currentCalculation,
        setCalculation,
        isResult,
        setIsResult,
        historyOverlayActive,
        setHistoryOverlayActive,
        history,
        setHistory
      }}
    >
      <Box
        w="300px"
        h="400px"
        borderRadius="2xl"
        boxShadow="0px 0px 100px -15px rgba(0,0,0,0.9)"
        cursor="pointer"
        userSelect="none"
      >
        <OptionsMenu style={styles.outputStyles} />
        <OutputSection
          output={currentCalculation}
          style={styles.outputStyles}
        />
        <InputSection style={styles.inputStyles} />
      </Box>
      <HistoryOverlay style={styles.outputStyles} />
    </AppContext.Provider>
  );
}
