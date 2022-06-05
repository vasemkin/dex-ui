import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { Balance, BalanceProps } from "./components/Balance";
import { Input, InputProps } from "./components/Input";
import { Symbol, SymbolProps } from "./components/Symbol";

export type TokenProps = SymbolProps & BalanceProps & InputProps;

export const Token: FC<TokenProps> = ({
  symbol,
  from,
  balance,
  amount,
  setAmount,
  ...rest
}) => {
  return (
    <Box {...rest}>
      <Symbol symbol={symbol} from={from} />
      <Input amount={amount} setAmount={setAmount} from={from} />
      <Balance balance={balance} />
    </Box>
  );
};
