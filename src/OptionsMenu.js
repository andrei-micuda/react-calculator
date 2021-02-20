import React from "react";
import { Flex, IconButton } from "@chakra-ui/react";
import { IoTimeOutline, IoColorFillOutline } from "react-icons/io5";

import { useAppContext } from "./Calculator";

export default function OptionsMenu({ style }) {
  const { historyOverlayActive, setHistoryOverlayActive } = useAppContext();

  return (
    <Flex
      style={style}
      flexDirection="row-reverse"
      alignItems="center"
      h="10%"
      px="15px"
      pt="15px"
      borderTopRadius="2xl"
    >
      <IconButton
        aria-label="Change theme"
        icon={<IoColorFillOutline m="auto" />}
        fontSize="25px"
        variant="unstyled"
        size="xxs"
        zIndex="2"
      />
      <IconButton
        onClick={() => setHistoryOverlayActive(!historyOverlayActive)}
        aria-label="History"
        icon={<IoTimeOutline m="auto" />}
        fontSize="25px"
        variant="unstyled"
        size="xxs"
        mr="10px"
        zIndex="2"
      />
    </Flex>
  );
}
