import type { NextPage } from "next";
import { Box, BoxProps, Button } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Main } from "../components/Main";

const Home: NextPage = () => {
  return (
    <Box {...wrapperStyles}>
      <Header />
      <Main />
    </Box>
  );
};

const wrapperStyles: BoxProps = {
  w: "100%",
  h: "100%",
};

export default Home;
