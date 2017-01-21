/* @flow */
import { connect } from "react-redux";
import { Component } from "react";
import type { Connector } from "react-redux";
import type { CounterState, Dispatcher } from "../types";
import { incrementAsync } from "../actions/counter";

type CounterProps = CounterState & Dispatcher;

class Counter extends Component {
  props: CounterProps;

  render() {
    const { dispatch, count } = this.props;
    return (
      <div>
        {count}
        :
        <button onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}>+</button>
        /
        <button onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}>-</button>
        /
        <br/>
        <button onClick={() => {
          dispatch(incrementAsync());
        }}>+ Async</button>
      </div>
    );
  }
}

const connector: Connector<{}, CounterProps> = connect(({ counter }) => counter);

export default connector(Counter);
