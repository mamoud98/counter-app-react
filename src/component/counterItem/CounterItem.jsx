import React from "react";
import classNames from "classnames";
import "./CounterItem.css";
function CounterItem(props) {
  return (
    <div className="counter-container">
      <p
        className={classNames({
          red: props.counterItem >= 5 && props.counterItem <= 7,
          green: props.counterItem >= 8,
          yellow: props.counterItem <= 4,
        })}
      >
        {props.counterItem}
      </p>
      <div className="counter-container">
        <button onClick={() => props.increment(props.id)}>+</button>
        <button
          disabled={props.counterItem === 0}
          onClick={() => props.decrement(props.id)}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default CounterItem;
