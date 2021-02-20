import { Center } from "@chakra-ui/react";

import Calculator from "./Calculator";

import "./styles.css";

export default function App() {
  return (
    <>
      <Center
        className="App"
        w="100vw"
        h="100vh"
        bgGradient="linear(to-r, #ff816e, #ffa171)"
      >
        <Calculator />
      </Center>
    </>
  );
}
