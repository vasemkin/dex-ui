import {
  Box,
  BoxProps,
  Image,
  ImageProps,
  Text,
  TextProps,
} from "@chakra-ui/react";
import { FC } from "react";

export type Symbols = "TOK" | "UNI";

export type SymbolProps = {
  from: boolean;
  symbol: Symbols;
} & BoxProps;

export const Symbol: FC<SymbolProps> = ({ from, symbol, ...rest }) => {
  return (
    <Box {...wrapperStyles} {...rest}>
      <Text {...fromStyles}>{from ? "From" : "To"}</Text>
      <Image {...imageStyles} />
      <Text>{symbol}</Text>
    </Box>
  );
};

const wrapperStyles: BoxProps = {
  display: "grid",
  alignItems: "center",
  gridTemplateColumns: "repeat(3, max-content)",
  gap: "10px",
};

const imageStyles: ImageProps = {
  src: "./img/Logo.svg",
  w: "24px",
  h: "24px",
};

const fromStyles: TextProps = {
  color: "#787878",
  fontSize: "16px",
};
