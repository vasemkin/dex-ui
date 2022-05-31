import { Box, BoxProps } from "@chakra-ui/react";
import { FC } from "react";
import {
  chakraGradientBorder,
  ChakraGradientBorderProps,
} from "../../hoc/ChakraGradientBorder";
import { Divide } from "./components/Divide";
import { Token } from "./components/Token/Token";

const Wrapper = chakraGradientBorder(Box);

export const Swap: FC<BoxProps> = ({ ...rest }) => {
  return (
    <Wrapper {...wrapperStyles} {...rest}>
      <Token />
      <Divide />
      <Token />
    </Wrapper>
  );
};

const wrapperStyles = {
  mt: "2rem",
  w: "370px",
  borderWidth: "2px",
  borderRadius: "20px",
  p: "28px",
  boxShadow: "0px 8px 64px 0px #0000000A",
  borderGradient:
    "linear-gradient(129.07deg, rgba(253, 123, 59, 0.2) 0%, rgba(185, 63, 240, 0.2) 100%)",
} as ChakraGradientBorderProps;
