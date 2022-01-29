import React, { useCallback, useState } from "react";
import CounterItem from "../../component/counterItem";
import { getCounterData, CounterData } from "../../lib/helpers/localStorage";

import "./counter.css";
const numberOfCounter = [1, 2, 3];
function Counter() {
  const [counterItem, setCounterItem] = useState(getCounterData);

  const increment = useCallback(
    (id) => {
      // debugger;
      setCounterItem(() => {
        const incrementData = {
          ...counterItem,
          total:
            counterItem.item[id].isActive === false
              ? counterItem.total + 1
              : counterItem.total,
          item: {
            ...counterItem.item,
            [id]: {
              ...counterItem.item.id,
              count: counterItem.item[id].count + 1,
              isActive: counterItem.item[id].count + 1 >= 1 ? true : false,
            },
          },
        };
        CounterData(incrementData);
        return incrementData;
      });
    },
    [counterItem]
  );

  const decrement = useCallback(
    (id) => {
      setCounterItem(() => {
        const decrementDat = {
          ...counterItem,
          total:
            counterItem.item[id].isActive === false ||
            counterItem.item[id].count === 1
              ? counterItem.total - 1
              : counterItem.total,
          item: {
            ...counterItem.item,
            [id]: {
              ...counterItem.item.id,
              count: counterItem.item[id].count - 1,
              isActive: counterItem.item[id].count - 1 <= 1 ? false : true,
            },
          },
        };
        CounterData(decrementDat);
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
            isActive: false,
          },
          2: {
            count: 0,
            isActive: false,
          },
          3: {
            count: 0,
            isActive: false,
          },
        },
      };
      CounterData(ResetTheData);
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
