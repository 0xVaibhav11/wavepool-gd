"use client";
import { ethers } from "ethers";

export const connectToMetaMask = async () => {
  try {
    if (typeof window.ethereum !== "undefined") {
      await window.ethereum.request({ method: "eth_requestAccounts" });

      //   console.log(networkId);

      try {
        const providers = new ethers.providers.Web3Provider(window.ethereum);

        const signer = await providers.getSigner();
        const address = await signer.getAddress();
        const user = {
          signer,
          providers,
          address,
        };

        return user;
        changeEthereumChain();
      } catch (e) {
        //  console.log(e);
        return e;
      }
    } else {
      console.error("MetaMask is not installed or not accessible.");
    }
  } catch (error) {
    console.error("Connection failed:", error);
  }
};

export async function changeEthereumChain() {
  try {
    await connectToMetaMask();
    if (typeof window.ethereum !== "undefined") {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0xa4ec" }],
      });
    } else {
      console.error("MetaMask is not installed or not accessible.");
    }
  } catch (error) {
    console.error("Failed to change Ethereum chain:", error);
  }
}

export const CheckChain = async () => {
  if (typeof window.ethereum !== "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" });

    const networkId = await window.ethereum.request({ method: "net_version" });
    //  console.log(networkId);
    return networkId;
  } else {
    alert("install metamask ");
  }
};
