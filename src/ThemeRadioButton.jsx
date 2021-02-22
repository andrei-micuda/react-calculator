import React from "react";
import { useRadio, Box, Grid, GridItem } from "@chakra-ui/react";

export default function ThemeRadioButton({ theme, ...props }) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} value={props.value} />
      <Grid
        height="100px"
        width="100px"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(3, 1fr)"
        {...checkbox}
        boxSizing="border-box"
        cursor="pointer"
        border="2px solid gray"
        borderRadius="md"
        boxShadow="dark-lg"
        overflow="hidden"
        _checked={{
          borderColor: "white"
        }}
      >
        <GridItem
          rowSpan={1}
          colSpan={3}
          bg={theme.outputStyles.backgroundColor}
        />
        <GridItem rowSpan={2} colSpan={2} bg={theme.inputStyles.baseColor} />
        <GridItem rowSpan={2} colSpan={1} bg={theme.inputStyles.accentColor2} />
      </Grid>
    </Box>
  );
}
