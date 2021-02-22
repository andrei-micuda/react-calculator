import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useRadioGroup,
  HStack
} from "@chakra-ui/react";

import ThemeRadioButton from "./ThemeRadioButton";

import { useAppContext } from "./Calculator";

export default function ThemeModal({ style, themes }) {
  const { isOpen, onClose, setCurrentTheme } = useAppContext();

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "theme",
    defaultValue: "theme-0",
    onChange: (value) => {
      setCurrentTheme(value);
    }
  });

  const group = getRootProps();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent {...style}>
        <ModalHeader>Choose theme</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <HStack {...group}>
            {Object.entries(themes).map((theme, index) => {
              const radio = getRadioProps({ value: `theme-${index}` });
              return (
                <ThemeRadioButton
                  key={index}
                  theme={theme[1]}
                  value={`theme-${index}`}
                  {...radio}
                />
              );
            })}
          </HStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
