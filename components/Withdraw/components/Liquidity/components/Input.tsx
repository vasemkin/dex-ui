import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Input as CInput,
  InputProps as CInputProps,
} from "@chakra-ui/react";
import { ethers } from "ethers";
import { ChangeEvent, FC, SetStateAction, useEffect } from "react";

export type InputProps = {
  amount: string;
  setAmount: SetStateAction<any>;
} & CInputProps;

export const Input: FC<InputProps> = ({ amount, setAmount, ...rest }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const _ = ethers.utils.parseEther(e.target.value);
      setAmount(e.target.value);
    } catch (error) {
      if (e.target.value === "") {
        setAmount(e.target.value);
      }
    }
  };

  const formatAmount = amount.length > 6 ? amount.substring(0, 7) : amount;

  return (
    <Box {...wrapperStyles} {...rest}>
      <CInput
        {...inputStyles}
        value={formatAmount}
        placeholder={"0"}
        onChange={handleChange}
      />
    </Box>
  );
};

const wrapperStyles: BoxProps = {
  mt: "16px",
  position: "relative",
};

const inputStyles: CInputProps = {
  background: "#EDEDED",
  _disabled: {
    background: "#EDEDED",
  },
  borderRadius: "8px 8px 0px 0px",
  fontSize: "20px",
  p: "8px 12px",
};
