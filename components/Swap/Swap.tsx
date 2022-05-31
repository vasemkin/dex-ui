import { Box, BoxProps, Button, ButtonProps } from "@chakra-ui/react";
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
    <Box>
      <Wrapper {...wrapperStyles} {...rest}>
        <Token />
        <Divide />
        <Token />
      </Wrapper>
      <Button {...buttonStyles}>Swap</Button>
    </Box>
  );
};

const wrapperStyles = {
  mt: "2rem",
  w: "370px",
  borderWidth: "2px",
  borderRadius: "20px",
  p: "28px",
  boxShadow: "0px 8px 64px 0px #0000000A",
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "16px",
  borderGradient:
    "linear-gradient(129.07deg, rgba(253, 123, 59, 0.2) 0%, rgba(185, 63, 240, 0.2) 100%)",
} as ChakraGradientBorderProps;

const buttonStyles: ButtonProps = {
  background: "linear-gradient(92.56deg, #FD7B3B 2.51%, #B93FF0 124.48%)",
  borderRadius: "12px",
  color: "#fff",
  padding: "15px 159px",
  fontSize: "16px !important",
  mt: "20px",
  w: "100%",
  _hover: {
    bg: "linear-gradient(92.56deg, #FD7B3B 2.51%, #B93FF0 124.48%)",
  },
  _active: {
    bg: "linear-gradient(92.56deg, #FD7B3B 2.51%, #B93FF0 124.48%)",
  },
};
