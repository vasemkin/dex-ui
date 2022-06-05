import {
  Box,
  BoxProps,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { Swap, SwapProps } from "./Swap/Swap";
import { DexInfo } from "./DexInfo/DexInfo";
import { Deposit } from "./Deposit/Deposit";
import { Withdraw } from "./Withdraw/Withdraw";

export type MainProps = SwapProps;

export const Main: FC<MainProps> = ({ dexUpdated, setDexUpdated }) => {
  return (
    <>
      <Box {...wrapperStyles}>
        <Box as="main" {...mainStyles}>
          <Tabs>
            <TabList>
              <Tab>Swap</Tab>
              <Tab>Deposit</Tab>
              <Tab>Withdraw</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Swap dexUpdated={dexUpdated} setDexUpdated={setDexUpdated} />
              </TabPanel>
              <TabPanel>
                <Deposit
                  dexUpdated={dexUpdated}
                  setDexUpdated={setDexUpdated}
                />
              </TabPanel>
              <TabPanel>
                <Withdraw
                  dexUpdated={dexUpdated}
                  setDexUpdated={setDexUpdated}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>

      <DexInfo dexUpdated={dexUpdated} setDexUpdated={setDexUpdated} />
    </>
  );
};

export const wrapperStyles: BoxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  w: "100%",
  h: "100%",
};

export const mainStyles: BoxProps = {
  w: "370px",
};
