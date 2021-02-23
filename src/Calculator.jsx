import React, { useState, useContext, createContext } from "react";
import { Box, Center, useDisclosure, IconButton, Link } from "@chakra-ui/react";
import { IoLogoGithub } from "react-icons/io5";

import OptionsMenu from "./OptionsMenu";
import OutputSection from "./OutputSection";
import InputSection from "./InputSection";
import HistoryOverlay from "./HistoryOverlay";
import ThemeModal from "./ThemeModal";

import themes from "./themes.json";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export default function Calculator() {
  const [currentTheme, setCurrentTheme] = useState("theme-0");
  const [currentCalculation, setCalculation] = useState("");
  const [isResult, setIsResult] = useState(false);
  const [historyOverlayActive, setHistoryOverlayActive] = useState(false);
  const [history, setHistory] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        flexDirection="column"
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

        <Link href="https://github.com/andrei-micuda" isExternal>
          <IconButton
            aria-label="Github link"
            icon={<IoLogoGithub />}
            color={themes[currentTheme].outputStyles.backgroundColor}
            bg="transparent"
            fontSize="44px"
            mt="10px"
            _hover={{ background: "transparent" }}
          />
        </Link>
      </Center>
    </AppContext.Provider>
  );
}
