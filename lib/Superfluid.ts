import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";

export async function createNewFlow(recipient: string, flowRate: string) {
  try {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);

      const signer = await provider.getSigner();
      const sf = await Framework.create({
        chainId: 80001,
        provider: provider,
      });
      const superSigner = sf.createSigner({ signer: signer });
      const daix = await sf.loadSuperToken("fDAIx");

      //console.log(daix);

      try {
        const createFlowOperation = daix.createFlow({
          sender: await superSigner.getAddress(),
          receiver: recipient,
          flowRate: flowRate,
          // userData?: string
        });

        const result = await createFlowOperation.exec(superSigner);
        //console.log(result);
        return result;
      } catch (error) {
        return error;
      }
    }
  } catch (e) {
    console.log(e);
  }
}

export async function GetFlow(recipient: string) {
  try {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);

      const sf = await Framework.create({
        chainId: 80001,
        provider: provider,
      });

      const daix = await sf.loadSuperToken("fDAIx");
      const signer = await provider.getSigner();
      const superSigner = sf.createSigner({ signer: signer });
      // console.log(daix);

      const flowdata = await daix.getFlow({
        sender: await superSigner.getAddress(),
        receiver: recipient,
        providerOrSigner: provider,
      });
      //console.log(flowdata);
      return flowdata;
    }
  } catch (error) {
    return error;
  }
}

// function for deleteing  existing flow
export async function deleteExistingFlow(recipient: string) {
  try {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);

      const signer = provider.getSigner();

      const chainId = await window.ethereum.request({ method: "eth_chainId" });
      const sf = await Framework.create({
        chainId: Number(chainId),
        provider: provider,
      });

      const superSigner = sf.createSigner({ signer: signer });

      // console.log(signer);
      // console.log(await superSigner.getAddress());
      const daix = await sf.loadSuperToken("fDAIx");

      // console.log(daix);

      const deleteFlowOperation = daix.deleteFlow({
        sender: await signer.getAddress(),
        receiver: recipient,
        // userData?: string
      });

      const result = await deleteFlowOperation.exec(superSigner);
      return result;
    }
    // console.log(result);
  } catch (error) {
    return error;
  }
}

export async function UpdateFlow(recipient: string, flowRate: string) {
  try {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);

      const signer = await provider.getSigner();
      const sf = await Framework.create({
        chainId: 80001,
        provider: provider,
      });
      const superSigner = sf.createSigner({ signer: signer });
      const daix = await sf.loadSuperToken("fDAIx");

      //  console.log(daix);

      const updateFlowOperation = daix.updateFlow({
        sender: await superSigner.getAddress(),
        receiver: recipient,
        flowRate: flowRate,
        // userData?: string
      });

      const result = await updateFlowOperation.exec(superSigner);
      //  console.log(result);
      return result;
    }
  } catch (error) {
    return error;
  }
}