import { Box, BoxProps, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import { Swap } from "./Swap/Swap";
import { DexInfo } from "./DexInfo/DexInfo";

export const Main: FC = () => {
  const [dexUpdated, setDexUpdated] = useState(false);

  return (
    <>
      <Box {...wrapperStyles}>
        <Swap dexUpdated={dexUpdated} setDexUpdated={setDexUpdated} />
      </Box>

      <DexInfo dexUpdated={dexUpdated} setDexUpdated={setDexUpdated} />
    </>
  );
};

export const wrapperStyles: BoxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  w: "100%",
  h: "100%",
};
