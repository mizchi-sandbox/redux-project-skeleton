/* @flow */
import type { IncrementAction } from "../types/action";

function wait(ms: number) {
  return new Promise(done => setTimeout(done, ms));
}

export async function incrementAsync(): Promise<IncrementAction> {
  await wait(100);
  return { type: "INCREMENT" };
}
