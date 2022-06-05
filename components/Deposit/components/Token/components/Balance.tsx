import { Text, TextProps } from "@chakra-ui/react";
import { BigNumber, BigNumberish, ethers } from "ethers";
import { FC } from "react";

export type BalanceProps = {
  balance: BigNumber | BigNumberish;
} & TextProps;

export const Balance: FC<BalanceProps> = ({ balance, ...rest }) => {
  const formatted = ethers.utils.formatEther(balance);

  return (
    <Text {...textStyles} {...rest}>
      Balance: {formatted}
    </Text>
  );
};

const textStyles: TextProps = {
  mt: "8px",
  fontSize: "12px",
  lineHeight: "14px",
  color: "#787878",
};
