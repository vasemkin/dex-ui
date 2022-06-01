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
  from: boolean;
} & CInputProps;

export const Input: FC<InputProps> = ({ amount, setAmount, from, ...rest }) => {
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

  useEffect(() => {
    if (!from && parseFloat(amount) === 0) {
      setAmount("");
    }
  }, [amount, from]);

  const formatAmount = amount.length > 6 ? amount.substring(0, 7) : amount;

  return (
    <Box {...wrapperStyles} {...rest}>
      {from && (
        <Box {...buttonWrapperStyles}>
          <Button {...buttonStyles}>50%</Button>
          <Button {...buttonStyles}>MAX</Button>
        </Box>
      )}
      <CInput
        {...inputStyles}
        disabled={!from}
        value={formatAmount}
        onChange={handleChange}
        placeholder={"0"}
      />
    </Box>
  );
};

const buttonStyles: ButtonProps = {
  bg: "none",
  p: 0,
  m: 0,
  border: "none",
  fontWeight: 500,
  fontSize: "14px !important",
  color: "#787878",
};

const wrapperStyles: BoxProps = {
  mt: "16px",
  position: "relative",
};

const buttonWrapperStyles: BoxProps = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  right: "12px",
  zIndex: "1",
  display: "grid",
  gridTemplateColumns: "repeat(2,max-content)",
  gap: "9px",
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
