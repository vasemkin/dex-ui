import type { NextPage } from "next";
import { Box, BoxProps } from "@chakra-ui/react";
import { useState } from "react";
import { Header } from "../components/Header";
import { Main } from "../components/Main";

const Home: NextPage = () => {
  const [dexUpdated, setDexUpdated] = useState(false);

  return (
    <Box {...wrapperStyles}>
      <Header dexUpdated={dexUpdated} setDexUpdated={setDexUpdated} />
      <Main dexUpdated={dexUpdated} setDexUpdated={setDexUpdated} />
    </Box>
  );
};

const wrapperStyles: BoxProps = {
  w: "100%",
  h: "100%",
};

export default Home;
