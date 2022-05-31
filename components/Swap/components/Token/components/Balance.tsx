import { Text, TextProps } from "@chakra-ui/react";
import { FC } from "react";

export type BalanceProps = {
  balance: string;
} & TextProps;

export const Balance: FC<BalanceProps> = ({ balance, ...rest }) => {
  return (
    <Text {...textStyles} {...rest}>
      Balance: {balance}
    </Text>
  );
};

const textStyles: TextProps = {
  mt: "8px",
  fontSize: "12px",
  lineHeight: "14px",
  color: "#787878",
};
