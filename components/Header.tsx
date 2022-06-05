import { Box, BoxProps, Button, Text, TextProps } from "@chakra-ui/react";
import { BigNumber, ethers } from "ethers";
import { FC, useEffect, useState } from "react";
import { useContracts } from "../hooks/useContracts";
import { useWeb3 } from "../hooks/useWeb3";
import { SwapProps } from "./Swap/Swap";

export type HeaderProps = SwapProps;

export const Header: FC<HeaderProps> = ({ dexUpdated }) => {
  const { connectWallet, disconnect, connected, address } = useWeb3();
  const [liquidity, setLiquidity] = useState<BigNumber>(BigNumber.from("0"));
  const { dex } = useContracts();

  useEffect(() => {
    if (!!dex && !!address) {
      const logic = async () => {
        const lq = await dex.getLiquidity(address);
        console.log("address: ", address);
        console.log("liquidity: ", lq.toString());
        setLiquidity(lq);
      };

      logic();
    }
  }, [address, dex, dexUpdated]);

  return (
    <Box {...wrapperStyles}>
      <Box>
        {connected ? (
          <Button onClick={disconnect}>Disconnect</Button>
        ) : (
          <Button onClick={connectWallet}>Connect wallet</Button>
        )}
      </Box>

      <Box {...userStyles}>
        <Box>{address}</Box>
        <Text {...textStyles}>
          Liquidity: {ethers.utils.formatEther(liquidity)}
        </Text>
      </Box>
    </Box>
  );
};

const userStyles: BoxProps = {
  display: "flex",
  flexDir: "column",
  alignItems: "flex-end",
};

const wrapperStyles: BoxProps = {
  p: "2rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const textStyles: TextProps = {
  fontSize: "12px",
  lineHeight: "14px",
  color: "#787878",
};
