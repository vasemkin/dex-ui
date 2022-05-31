import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { Balance } from "./components/Balance";
import { Input } from "./components/Input";
import { Symbol } from "./components/Symbol";

export const Token: FC = () => {
  return (
    <Box>
      <Symbol symbol="TOK" from={true} />
      <Input />
      <Balance balance="0" />
    </Box>
  );
};
