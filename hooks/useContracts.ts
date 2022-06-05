import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useWeb3 } from "./useWeb3";

import type { DEX, Token as Tok, UniToken } from "../typechain";

import dexAbi from "../deployments/localhost/DEX.json";
import tokenAbi from "../deployments/localhost/Token.json";
import uniAbi from "../deployments/localhost/UniToken.json";

export const useContracts = () => {
  const { provider, connectWallet, address } = useWeb3();

  //@ts-ignore
  const [dex, setDex] = useState<DEX>(null);
  //@ts-ignore
  const [uni, setUni] = useState<UniToken>(null);
  //@ts-ignore
  const [token, setToken] = useState<Tok>(null);

  useEffect(() => {
    if (!!provider) {
      const logic = async () => {
        const signer = await provider.getSigner();

        const dx = new ethers.Contract(dexAbi.address, dexAbi.abi, signer);
        const dexSigned = (await dx.connect(signer)) as DEX;
        setDex(dexSigned);

        const un = new ethers.Contract(uniAbi.address, uniAbi.abi, signer);
        const uniSigned = (await un.connect(signer)) as UniToken;
        setUni(uniSigned);

        const tk = new ethers.Contract(tokenAbi.address, tokenAbi.abi, signer);
        const tkSigned = (await tk.connect(signer)) as Tok;
        setToken(tkSigned);
      };

      logic();
    }
  }, [provider]);

  return { dex, uni, token };
};
