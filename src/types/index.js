// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from "redux";

export type CounterState = {
  count: number;
}

export type State = {
  counter: CounterState;
};

export type Action =
    { type: "INCREMENT"}
  | { type: "DECREMENT"}
;

export type Store = ReduxStore<State, Action>;
export type Dispatch = ReduxDispatch<Action>;
export type Dispatcher = {
  dispatch: Dispatch;
}
