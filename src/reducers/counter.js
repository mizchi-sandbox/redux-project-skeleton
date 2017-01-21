/* @flow */
import type { CounterState } from "../types";
import type { Action } from "../types/action";

const initialState: CounterState = {
  count: 0
};

const counter = (state: CounterState = initialState, action: Action): CounterState => {
  switch (action.type) {
  case "INCREMENT":
    return { count: state.count + 1 };
  case "DECREMENT":
    return { count: state.count - 1 };
  default:
    return state;
  }
};

export default counter;
