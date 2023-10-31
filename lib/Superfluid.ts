"use client";
import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";
import { createRecord } from "./Polybase";
export async function createNewFlow(
  recipient: string,
  flowRate: string,
  remark: string
) {
  try {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);

      const signer = await provider.getSigner();
      const sf = await Framework.create({
        chainId: 42220,
        provider: provider,
      });
      const superSigner = sf.createSigner({ signer: signer });
      const daix = await sf.loadSuperToken(
        "0x62B8B11039FcfE5aB0C56E502b1C372A3d2a9c7A"
      );

      //console.log(daix);
      const ss = await superSigner.getAddress();
      try {
        const createFlowOperation = daix.createFlow({
          sender: await superSigner.getAddress(),
          receiver: recipient,
          flowRate: flowRate,
          // userData?: string
        });
        const timestamp = Date.now();

        const timestampInSeconds = Math.floor(Date.now() / 1000);

        const result = await createFlowOperation.exec(superSigner);
        console.log(result);
        const data = await createRecord(
          recipient,
          ss,
          result.hash,
          String(timestampInSeconds),
          flowRate,
          remark,
          "CreateFlow"
        );
        console.log(data);
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
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    console.log(provider);
    const sf = await Framework.create({
      chainId: 42220,
      provider: provider,
    });
    console.log("cfsjf");

    const daix = await sf.loadSuperToken(
      "0x62B8B11039FcfE5aB0C56E502b1C372A3d2a9c7A"
    );

    const signer = provider.getSigner();
    console.log(signer);
    const superSigner = sf.createSigner({ signer: signer });
    // console.log(daix);

    const flowdata = await daix.getFlow({
      sender: await superSigner.getAddress(),
      receiver: recipient,
      providerOrSigner: provider,
    });
    console.log(flowdata);
    return flowdata;
  } catch (e) {
    console.log(e);
  }
}

// function for deleteing  existing flow
export async function deleteExistingFlow(recipient: string, remark: string) {
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
      const daix = await sf.loadSuperToken(
        "0x62B8B11039FcfE5aB0C56E502b1C372A3d2a9c7A"
      );

      // console.log(daix);
      const ss = await signer.getAddress();
      const deleteFlowOperation = daix.deleteFlow({
        sender: await signer.getAddress(),
        receiver: recipient,
        // userData?: string
      });
      const timestamp = Date.now();

      const timestampInSeconds = Math.floor(Date.now() / 1000);
      const result = await deleteFlowOperation.exec(superSigner);
      console.log(result);
      const data = await createRecord(
        recipient,
        ss,
        result.hash,
        String(timestampInSeconds),
        "0",
        remark,
        "DeleteFlow"
      );
      console.log(data);
      return result;
    }
  } catch (error) {
    return error;
  }
}

export async function UpdateFlow(
  recipient: string,
  flowRate: string,
  remark: string
) {
  try {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);

      const signer = await provider.getSigner();
      const sf = await Framework.create({
        chainId: 42220,
        provider: provider,
      });
      const superSigner = sf.createSigner({ signer: signer });
      const daix = await sf.loadSuperToken(
        "0x62B8B11039FcfE5aB0C56E502b1C372A3d2a9c7A"
      );

      //  console.log(daix);

      const updateFlowOperation = daix.updateFlow({
        sender: await superSigner.getAddress(),
        receiver: recipient,
        flowRate: flowRate,
        // userData?: string
      });
      const ss = await signer.getAddress();
      const result = await updateFlowOperation.exec(superSigner);
      //  console.log(result);
      const timestamp = Date.now();

      const timestampInSeconds = Math.floor(Date.now() / 1000);

      console.log(result);
      const data = await createRecord(
        recipient,
        ss,
        result.hash,
        String(timestampInSeconds),
        flowRate,
        remark,
        "UpdateFlow"
      );
      console.log(data);
      return result;
    }
  } catch (error) {
    return error;
  }
}
