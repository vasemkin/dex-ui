import { Box, BoxProps, Text, TextProps } from "@chakra-ui/react";
import { BigNumber, ethers } from "ethers";
import { FC, useEffect, useState } from "react";
import { useContracts } from "../../hooks/useContracts";
import { SwapProps } from "../Swap/Swap";

export const DexInfo: FC<SwapProps> = ({ dexUpdated }) => {
  const { dex, token: tok, uni } = useContracts();
  const [uniBalance, setUniBalance] = useState<BigNumber>(BigNumber.from("0"));
  const [tokBalance, setTokBalance] = useState<BigNumber>(BigNumber.from("0"));

  const setBalances = async () => {
    const unib = await uni.balanceOf(dex.address);
    const tokb = await tok.balanceOf(dex.address);

    setUniBalance(unib);
    setTokBalance(tokb);
  };

  useEffect(() => {
    if (!!dex && !!tok && !!uni) {
      setBalances();
    }
  }, [dex, tok, uni]);

  useEffect(() => {
    if (!!dex && !!tok && !!uni) {
      setBalances();
    }
  }, [dexUpdated]);

  return (
    <Box {...wrapperStyles}>
      <Text {...textStyles}>
        DEX UNI Balance: {ethers.utils.formatEther(uniBalance)}
      </Text>
      <Text {...textStyles}>
        DEX TOK Balance: {ethers.utils.formatEther(tokBalance)}
      </Text>
    </Box>
  );
};

const wrapperStyles: BoxProps = {
  position: "fixed",
  bottom: 0,
  left: 0,
  p: "2rem",
};

const textStyles: TextProps = {
  fontSize: "14px",
  color: "#787878",
};
