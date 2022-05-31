import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { Symbol } from "./components/Symbol";

export const Token: FC = () => {
  return (
    <Box>
      <Symbol symbol="TOK" from={true} />
    </Box>
  );
};
