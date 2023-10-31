import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
const easContractAddress = "0xaEF4103A04090071165F78D45D83A0C0782c2B2a";
const schemaUID =
  "0x4d9aaab500d2345561054323e68d968925123709fbb0ef822c3433c658dc3409";
const eas = new EAS(easContractAddress);

export async function useEas({}) {
  // Signer must be an ethers-like signer.
  //   await eas.connect(signer);
  // Initialize SchemaEncoder with the schema string
  const schemaEncoder = new SchemaEncoder(
    "string txhash,string reciver,string sender,string time,string monthamount,string flowarate"
  );
  const encodedData = schemaEncoder.encodeData([
    { name: "txhash", value: "", type: "string" },
    { name: "reciver", value: "", type: "string" },
    { name: "sender", value: "", type: "string" },
    { name: "time", value: "", type: "string" },
    { name: "monthamount", value: "", type: "string" },
    { name: "flowarate", value: "", type: "string" },
  ]);
  const tx = await eas.attest({
    schema: schemaUID,
    data: {
      recipient: "0x0000000000000000000000000000000000000000",

      revocable: true, // Be aware that if your schema is not revocable, this MUST be false
      data: encodedData,
    },
  });
  const newAttestationUID = await tx.wait();
  return { newAttestationUID };
  console.log("New attestation UID:", newAttestationUID);
}
