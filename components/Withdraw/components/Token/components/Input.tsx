import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Input as CInput,
  InputProps as CInputProps,
} from "@chakra-ui/react";
import { FC, SetStateAction, useEffect } from "react";

export type InputProps = {
  amount: string;
  setAmount: SetStateAction<any>;
  from: boolean;
} & CInputProps;

export const Input: FC<InputProps> = ({ amount, setAmount, from, ...rest }) => {
  useEffect(() => {
    if (!from && parseFloat(amount) === 0) {
      setAmount("");
    }
  }, [amount, from]);

  const formatAmount = amount.length > 6 ? amount.substring(0, 7) : amount;

  return (
    <Box {...wrapperStyles} {...rest}>
      <CInput
        {...inputStyles}
        disabled={true}
        value={formatAmount}
        placeholder={"0"}
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
