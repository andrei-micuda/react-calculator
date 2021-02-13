import React, { useEffect, useCallback, useMemo } from "react";
import { SimpleGrid, Center } from "@chakra-ui/react";

import { useAppContext } from "./Calculator";

export default function InputSection({ style }) {
  const inputButtons = useMemo(
    () => [
      {
        displayValue: "C",
        inputValue: "C"
      },
      {
        displayValue: "±",
        inputValue: "±"
      },
      {
        displayValue: "%",
        inputValue: "%"
      },
      {
        displayValue: "÷",
        inputValue: "/"
      },
      {
        displayValue: "7",
        inputValue: "7"
      },
      {
        displayValue: "8",
        inputValue: "8"
      },
      {
        displayValue: "9",
        inputValue: "9"
      },
      {
        displayValue: "×",
        inputValue: "*"
      },
      {
        displayValue: "4",
        inputValue: "4"
      },
      {
        displayValue: "5",
        inputValue: "5"
      },
      {
        displayValue: "6",
        inputValue: "6"
      },
      {
        displayValue: "-",
        inputValue: "-"
      },
      {
        displayValue: "3",
        inputValue: "3"
      },
      {
        displayValue: "2",
        inputValue: "2"
      },
      {
        displayValue: "1",
        inputValue: "1"
      },
      {
        displayValue: "+",
        inputValue: "+"
      },
      {
        displayValue: "0",
        inputValue: "0"
      },
      {
        displayValue: ".",
        inputValue: "."
      },
      {
        displayValue: "🠐",
        inputValue: "🠐"
      },
      {
        displayValue: "=",
        inputValue: "="
      }
    ],
    []
  );

  const {
    currentCalculation,
    setCalculation,
    isResult,
    setIsResult
  } = useAppContext();

  //* we will use the eval() function to compute the result
  const evaluateCalculation = (calc) => {
    //* since in JS % is the modulus operator, we want to change any percentages in the string with values
    //* i.e. 20% => 0.2
    calc = calc.replaceAll(/[0-9]+%/g, (perc) => {
      const num = perc.slice(0, perc.length - 1);
      const res = num / 100;
      return res.toString();
    });

    try {
      const res = eval(calc);
      return res.toString();
    } catch (err) {
      return "Err.";
    }
  };

  const updateCalculation = useCallback(
    (currentCalculation, pressedBtn) => {
      switch (pressedBtn) {
        case "C":
          setCalculation("");
          setIsResult(false);
          break;

        case "🠐":
          if (isResult) {
            setCalculation("");
            setIsResult(false);
          } else {
            setCalculation(
              currentCalculation.slice(0, currentCalculation.length - 1)
            );
          }
          break;

        case "±":
          if (currentCalculation[0] !== "-") {
            setCalculation("-".concat(currentCalculation));
          } else {
            setCalculation(currentCalculation.slice(1));
          }
          break;

        case "=":
          setCalculation(evaluateCalculation(currentCalculation));
          setIsResult(true);
          break;

        default:
          if (isResult) {
            setCalculation(pressedBtn);
            setIsResult(false);
          } else {
            setCalculation(currentCalculation.concat(pressedBtn));
          }
          break;
      }
    },
    [isResult, setIsResult, setCalculation]
  );

  const handleKeyPress = useCallback(
    (ev) => {
      ev.preventDefault();
      let key = ev.key;

      switch (key) {
        //* we want the same behaviour we have for = on Enter
        case "Enter":
          key = "=";
          break;

        //* we want the same behaviour we have for C on Esc
        case "Escape":
          key = "C";
          break;

        //* we want the same behaviour we have for 🠐 on Backspace
        case "Backspace":
          key = "🠐";
          break;

        default:
          break;
      }

      //* we want Esc to act as C
      const validInputs = inputButtons.map((btn) => btn.inputValue);
      if (validInputs.includes(key)) {
        updateCalculation(currentCalculation, key);
      }
    },
    [inputButtons, currentCalculation, updateCalculation]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  return (
    <SimpleGrid columns={4} autoRows={true}>
      {inputButtons.map((btn, i) => {
        let styleProp = {
          backgroundColor: style.baseColor
        };

        let hoverProp = {
          backgroundColor: style.hoverColor
        };
        if (i < 3) {
          styleProp = {
            backgroundColor: style.accentColor1
          };

          hoverProp = {
            backgroundColor: style.hoverColor1
          };
        }

        if (i % 4 === 3) {
          styleProp = {
            backgroundColor: style.accentColor2
          };

          hoverProp = {
            backgroundColor: style.hoverColor2
          };
        }

        if (i === 16) {
          styleProp = {
            backgroundColor: style.baseColor,
            borderBottomLeftRadius: "2xl"
          };
        }

        if (i === 19) {
          styleProp = {
            backgroundColor: style.accentColor3,
            borderBottomRightRadius: "2xl"
          };

          hoverProp = {
            backgroundColor: style.hoverColor3
          };
        }

        return (
          <Center
            className="input-tile"
            color={style.fontColor}
            key={i}
            onClick={() =>
              updateCalculation(currentCalculation, btn.inputValue)
            }
            height="52px"
            border="1px solid rgba(0, 0, 0, 0.08)"
            _hover={hoverProp}
            {...styleProp}
          >
            {btn.displayValue}
          </Center>
        );
      })}
    </SimpleGrid>
  );
}
