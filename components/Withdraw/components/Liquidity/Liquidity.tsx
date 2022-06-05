import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { Balance, BalanceProps } from "./components/Balance";
import { Input, InputProps } from "./components/Input";
import { Symbol, SymbolProps } from "./components/Symbol";

export type LiquidityProps = SymbolProps & BalanceProps & InputProps;

export const Liquidity: FC<LiquidityProps> = ({
  balance,
  amount,
  setAmount,
  ...rest
}) => {
  return (
    <Box {...rest}>
      <Symbol />
      <Input amount={amount} setAmount={setAmount} />
      <Balance balance={balance} />
    </Box>
  );
};
