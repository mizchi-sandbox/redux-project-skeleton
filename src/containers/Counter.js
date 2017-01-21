/* @flow */
import { connect } from "react-redux";
import type { Connector } from "react-redux";
import type { CounterState, Dispatcher } from "../types";

const Counter = props => {
  const { dispatch, count } = props;
  return (
    <div>
      {count}
      :
      <button onClick={() => {
        dispatch({type: "INCREMENT"});
      }}>+</button>
      /
      <button onClick={() => {
        dispatch({type: "DECREMENT"});
      }}>-</button>
    </div>
  );
};

const connector: Connector<{}, CounterState & Dispatcher> = connect(({counter}) => counter);

export default connector(Counter);
