import { Box, BoxProps, Button, ButtonProps, useToast } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
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

export type SwapProps = {
  dexUpdated: boolean;
  setDexUpdated: Dispatch<SetStateAction<boolean>>;
};

export const Swap: FC<SwapProps> = ({ dexUpdated, setDexUpdated, ...rest }) => {
  const { provider, connectWallet, address } = useWeb3();
  const { dex, uni, token: tok } = useContracts();
  const toast = useToast();

  const [uniBalance, setUniBalance] = useState<BigNumber>(BigNumber.from("0"));
  const [tokBalance, setTokBalance] = useState<BigNumber>(BigNumber.from("0"));

  const [fromAmt, setFromAmt] = useState<string>("0");
  const [toAmt, setToAmt] = useState<string>("0");

  const [fromAddress, setFromAddress] = useState<string>(tokenAbi.address);
  const [toAddress, setToAddress] = useState<string>(uniAbi.address);

  const [swapDisabled, setSwapDisabled] = useState<boolean>(false);

  const updateUniBalance = async () => {
    const uniBalance = await uni.balanceOf(address);
    setUniBalance(uniBalance);
  };

  useEffect(() => {
    if (!!uni && !!address) {
      updateUniBalance();
    }
  }, [uni, address]);

  const updateTokBalance = async () => {
    const tokBalance = await tok.balanceOf(address);
    setTokBalance(tokBalance);
  };

  useEffect(() => {
    if (!!uni && !!address) {
      updateTokBalance();
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
            fromAddress,
            toAddress
          );

          setToAmt(ethers.utils.formatEther(tokenEstimate));
        } catch (error) {
          alert("not enough liquidity");
        }
      };

      logic();
    }
  }, [fromAmt]);

  const handlePairChange = () => {
    const from = fromAddress;
    const to = toAddress;
    setFromAddress(to);
    setToAddress(from);
    setToAmt("");
    setFromAmt("");
  };

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
        toast({
          title: "tx sent to Polygon",
          description: `hash: ${approveTx.hash}. please wait for tx to be mined before swap.`,
        });
        setSwapDisabled(true);
        await approveTx.wait();
        setSwapDisabled(false);
      } else {
        const approveTx = await uni.approve(dex.address, amt);
        setSwapDisabled(true);
        toast({
          title: "tx sent to Polygon",
          description: `hash: ${approveTx.hash}. please wait for tx to be mined before swap.`,
        });
        await approveTx.wait();
        setSwapDisabled(false);
      }

      const tx = await dex.swap(amt, fromAddress, toAddress);
      toast({
        title: "tx sent to Polygon",
        description: `hash: ${tx.hash}.`,
      });
      await tx.wait();
      updateTokBalance();
      updateUniBalance();
      setDexUpdated((prev) => !prev);
    }
  };

  return (
    <Box w="370px">
      <Wrapper {...wrapperStyles} {...rest}>
        <Token
          symbol={fromAddress === tok?.address ? "TOK" : "UNI"}
          from={true}
          balance={fromAddress === tok?.address ? tokBalance : uniBalance}
          amount={fromAmt}
          setAmount={setFromAmt}
        />
        <Divide action={handlePairChange} />
        <Token
          symbol={toAddress === uni?.address ? "UNI" : "TOK"}
          from={false}
          balance={toAddress === uni?.address ? uniBalance : tokBalance}
          amount={toAmt}
          setAmount={setToAmt}
        />
      </Wrapper>
      {!!provider ? (
        <Button {...buttonStyles} onClick={swap} disabled={swapDisabled}>
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
