import { Box, BoxProps, Button, ButtonProps } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import {
  chakraGradientBorder,
  ChakraGradientBorderProps,
} from "../../hoc/ChakraGradientBorder";
import { Divide } from "./components/Divide";
import { Token } from "./components/Token/Token";
import { useWeb3 } from "../../hooks/useWeb3";
import { BigNumber, ethers } from "ethers";
import { useContracts } from "../../hooks/useContracts";

import tokenAbi from "../../deployments/testnet/Token.json";
import uniAbi from "../../deployments/testnet/UniToken.json";

const Wrapper = chakraGradientBorder(Box);

export const Swap: FC<BoxProps> = ({ ...rest }) => {
  const { provider, connectWallet, address } = useWeb3();
  const { dex, uni, token: tok } = useContracts();

  const [uniBalance, setUniBalance] = useState<BigNumber>(BigNumber.from("0"));
  const [tokBalance, setTokBalance] = useState<BigNumber>(BigNumber.from("0"));

  const [fromAmt, setFromAmt] = useState<string>("0");
  const [toAmt, setToAmt] = useState<string>("0");

  const [fromAddress, setFromAddress] = useState<string>(tokenAbi.address);
  const [toAddress, setToAddress] = useState<string>(uniAbi.address);

  useEffect(() => {
    if (!!uni && !!address) {
      const logic = async () => {
        const uniBalance = await uni.balanceOf(address);
        setUniBalance(uniBalance);
      };

      logic();
    }
  }, [uni, address]);

  useEffect(() => {
    if (!!uni && !!address) {
      const logic = async () => {
        const tokBalance = await tok.balanceOf(address);
        setTokBalance(tokBalance);
      };

      logic();
    }
  }, [uni, address]);

  useEffect(() => {
    if (!!dex) {
      const logic = async () => {
        const amt = fromAmt === "" ? "0" : fromAmt;
        const value = ethers.utils.parseEther(amt);
        try {
          const tokenEstimate = await dex.estimateTokenAmount(
            value,
            tokenAbi.address,
            uniAbi.address
          );

          setToAmt(ethers.utils.formatEther(tokenEstimate));
        } catch (error) {
          alert("not enough liquidity");
        }
      };

      logic();
    }
  }, [fromAmt]);

  const swap = async () => {
    try {
      const _ = ethers.utils.parseEther(fromAmt);
    } catch (error) {
      alert("please input a valid amount");
      return;
    }

    const amt = ethers.utils.parseEther(fromAmt);

    if (!!dex) {
      if (fromAddress === tok.address) {
        const approveTx = await tok.approve(dex.address, amt);
        await approveTx.wait();
      } else {
        const approveTx = await uni.approve(dex.address, amt);
        await approveTx.wait();
      }

      const tx = await dex.swap(amt, fromAddress, toAddress);
      console.log("swap tx: ", tx.hash);
    }
  };

  return (
    <Box>
      <Wrapper {...wrapperStyles} {...rest}>
        <Token
          symbol="TOK"
          from={true}
          balance={tokBalance}
          amount={fromAmt}
          setAmount={setFromAmt}
        />
        <Divide />
        <Token
          symbol="UNI"
          from={false}
          balance={uniBalance}
          amount={toAmt}
          setAmount={setToAmt}
        />
      </Wrapper>
      {!!provider ? (
        <Button {...buttonStyles} onClick={swap}>
          Swap
        </Button>
      ) : (
        <Button {...buttonStyles} onClick={connectWallet}>
          Connect wallet
        </Button>
      )}
    </Box>
  );
};

const wrapperStyles = {
  mt: "2rem",
  w: "370px",
  borderWidth: "2px",
  borderRadius: "20px",
  p: "28px",
  boxShadow: "0px 8px 64px 0px #0000000A",
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "16px",
  borderGradient:
    "linear-gradient(129.07deg, rgba(253, 123, 59, 0.2) 0%, rgba(185, 63, 240, 0.2) 100%)",
} as ChakraGradientBorderProps;

const buttonStyles: ButtonProps = {
  background: "linear-gradient(92.56deg, #FD7B3B 2.51%, #B93FF0 124.48%)",
  borderRadius: "12px",
  color: "#fff",
  padding: "15px 159px",
  fontSize: "16px !important",
  mt: "20px",
  w: "100%",
  _hover: {
    bg: "linear-gradient(92.56deg, #FD7B3B 2.51%, #B93FF0 124.48%)",
  },
  _active: {
    bg: "linear-gradient(92.56deg, #FD7B3B 2.51%, #B93FF0 124.48%)",
  },
};
