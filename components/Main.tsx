import { Box, BoxProps, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Swap } from "./Swap/Swap";

export const Main: FC = () => {
  return (
    <Box {...wrapperStyles}>
      <Swap />
    </Box>
  );
};

export const wrapperStyles: BoxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  w: "100%",
  h: "100%",
};
