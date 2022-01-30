import React, { useCallback, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import CounterItem from "../../component/counterItem";
import {
  getCounterData,
  counterData,
  initialDataInLocalStorage,
} from "../../lib/helpers/localStorage";

import "./counter.css";

//array
const numberOfCounter = [1, 2, 3];

function Counter() {
  const [counterItem, setCounterItem] = useState(getCounterData);

  //function
  const increment = useCallback((id) => {
      setCounterItem((counterItem) => {
        const incrementData = {
          ...counterItem,
          total:
            counterItem.item[id].count < 1
              ? counterItem.total + 1
              : counterItem.total,
          item: {
            ...counterItem.item,
            [id]: {
              ...counterItem.item.id,
              count: counterItem.item[id].count + 1,
            },
          },
        };
        counterData(incrementData);
        return incrementData;
      });
    },
    [counterItem]
  );

  const decrement = useCallback((id) => {
      setCounterItem((counterItem) => {
        const decrementDat = {
          ...counterItem,
          total:
            counterItem.item[id].count === 1
              ? counterItem.total - 1
              : counterItem.total,
          item: {
            ...counterItem.item,
            [id]: {
              ...counterItem.item.id,
              count: counterItem.item[id].count - 1,
            },
          },
        };
        counterData(decrementDat);
        return decrementDat;
      });
    },
    [counterItem]
  );
  const ResetTheCount = useCallback(() => {
    setCounterItem(() => {
      const ResetTheData = {
        ...counterItem,
        total: 0,
        item: {
          ...counterItem.item,
          1: {
            count: 0,
          },
          2: {
            count: 0,
          },
          3: {
            count: 0,
          },
        },
      };
      counterData(ResetTheData);
      return ResetTheData;
    });
  }, [counterItem]);

  return (
    <div>
      <h1>{`Cart Counter ${counterItem.total}`}</h1>
      <div className="reset">
        <button disabled={counterItem.total === 0} onClick={ResetTheCount}>
          Reset
        </button>
      </div>
      {numberOfCounter &&
        numberOfCounter.map((number) => (
          <CounterItem
            key={number}
            counterItem={counterItem.item[number].count}
            increment={increment}
            decrement={decrement}
            id={number}
          />
        ))}
    </div>
  );
}

export default Counter;
