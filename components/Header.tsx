import { Box, BoxProps, Button, Text } from "@chakra-ui/react";
import { useWeb3 } from "../hooks/useWeb3";

export const Header = () => {
  const { connectWallet, disconnect, connected, address } = useWeb3();

  return (
    <Box {...wrapperStyles}>
      <Box>
        {connected ? (
          <Button onClick={disconnect}>Disconnect</Button>
        ) : (
          <Button onClick={connectWallet}>Connect wallet</Button>
        )}
      </Box>

      <Box>{address}</Box>
    </Box>
  );
};

const wrapperStyles: BoxProps = {
  p: "2rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
