import React, { useState, useContext, createContext } from "react";
import { Box, Center, useDisclosure } from "@chakra-ui/react";

import OptionsMenu from "./OptionsMenu";
import OutputSection from "./OutputSection";
import InputSection from "./InputSection";
import HistoryOverlay from "./HistoryOverlay";
import ThemeModal from "./ThemeModal";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export default function Calculator() {
  const [currentTheme, setCurrentTheme] = useState("theme-0");
  const [currentCalculation, setCalculation] = useState("");
  const [isResult, setIsResult] = useState(false);
  const [historyOverlayActive, setHistoryOverlayActive] = useState(false);
  const [history, setHistory] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const themes = {
    "theme-0": {
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
    },
    "theme-1": {
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
        accentColor2: "#cae5f8",
        hoverColor2: "#b6cedf",
        accentColor3: "#9fd0f0",
        hoverColor3: "#8fbbd8"
      }
    }
  };
  // #ebebeb

  return (
    <AppContext.Provider
      value={{
        setCurrentTheme,
        currentCalculation,
        setCalculation,
        isResult,
        setIsResult,
        historyOverlayActive,
        setHistoryOverlayActive,
        history,
        setHistory,
        isOpen,
        onOpen,
        onClose
      }}
    >
      <Center
        className="App"
        w="100vw"
        h="100vh"
        bgGradient={`linear(to-r, ${themes[currentTheme].inputStyles.accentColor3}, ${themes[currentTheme].inputStyles.accentColor2})`}
      >
        <Box
          w="300px"
          h="400px"
          borderRadius="2xl"
          boxShadow="0px 0px 100px -15px rgba(0,0,0,0.9)"
          cursor="pointer"
          userSelect="none"
        >
          <OptionsMenu style={themes[currentTheme].outputStyles} />
          <OutputSection
            output={currentCalculation}
            style={themes[currentTheme].outputStyles}
          />
          <InputSection style={themes[currentTheme].inputStyles} />
        </Box>
        <HistoryOverlay style={themes[currentTheme].outputStyles} />
        <ThemeModal style={themes[currentTheme].outputStyles} themes={themes} />
      </Center>
    </AppContext.Provider>
  );
}
