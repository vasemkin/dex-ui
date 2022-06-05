import {
  Box,
  BoxProps,
  Image,
  ImageProps,
  Text,
  TextProps,
} from "@chakra-ui/react";
import { FC } from "react";

export type SymbolProps = BoxProps;

export const Symbol: FC<SymbolProps> = ({ ...rest }) => {
  return (
    <Box {...wrapperStyles} {...rest}>
      <Text {...fromStyles}>Liquidity</Text>
    </Box>
  );
};

const wrapperStyles: BoxProps = {
  display: "grid",
  alignItems: "center",
  gridTemplateColumns: "repeat(3, max-content)",
  gap: "10px",
};

const fromStyles: TextProps = {
  color: "#787878",
  fontSize: "16px",
};
