import { Box, BoxProps, Text } from "@chakra-ui/react";
import { FC } from "react";

export const Main: FC = () => {
  return (
    <Box {...wrapperStyles}>
      <Text>main content goes here</Text>
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
