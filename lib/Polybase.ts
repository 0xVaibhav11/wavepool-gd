"use client";
import { Polybase } from "@polybase/client";

const db = new Polybase({
  defaultNamespace:
    "pk/0xbbc1ff78605c9f8c178d474e3d66aca2512b2d59838fac927f23320f5b101fca1b7ed14f387e0ff09a0ded2f6468be24f87e23328a472e7692ae25dae8d4f120/GooDDay",
});

const collectionReference = db.collection("User");

export async function createRecord(
  receiver: string,
  sender: string,
  txhash: string,
  time: string,
  flowrate: string,
  remark: string
) {
  // .create(args) args array is defined by the constructor fn
  const recordData = await collectionReference.create([
    txhash,
    receiver,
    sender,
    txhash,
    time,
    flowrate,
    remark,
  ]);
  return recordData;
}

export async function getRecordBySender(sender: string) {
  const records = await collectionReference.where("sender", "==", sender).get();

  // Array of records is available under the data property
  const { data, cursor } = records;
  console.log(data);
  console.log(cursor);
}
export async function getRecordByReciver(reciver: string) {
  const records = await collectionReference
    .where("receiver", "==", reciver)
    .get();

  // Array of records is available under the data property
  const { data, cursor } = records;
  console.log(data);
  console.log(cursor);
}
export async function getRecordByRemark(remark: string) {
  const records = await collectionReference.where("remark", "==", remark).get();

  // Array of records is available under the data property
  const { data, cursor } = records;
  console.log(data);
  console.log(cursor);
}
export async function getRecordByTxhash(txhash: string) {
  const records = await collectionReference.where("txhash", "==", txhash).get();

  // Array of records is available under the data property
  const { data, cursor } = records;
  console.log(data);
  console.log(cursor);
}
