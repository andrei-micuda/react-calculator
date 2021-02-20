import React from "react";
import { Flex, Box, Divider } from "@chakra-ui/react";

import { useAppContext } from "./Calculator";

export default function HistoryOverlay({ style }) {
  const { historyOverlayActive, history } = useAppContext();

  return (
    <Flex
      style={
        historyOverlayActive
          ? {
              ...style,
              display: "flex",
              opacity: "1"
            }
          : {
              ...style,
              display: "none",
              opacity: "0"
            }
      }
      w="300px"
      h="400px"
      borderRadius="2xl"
      zIndex="1"
      id="historyOverlay"
      flexDirection="column"
      textAlign="right"
      justifyContent="flex-end"
      pb="15px"
    >
      {history.map((elem, index) => (
        <div key={index}>
          <Divider borderColor="gray" w="95%" mx="auto" />
          <Box px="25px" fontSize="32px">
            {elem}
          </Box>
        </div>
      ))}
    </Flex>
  );
}
