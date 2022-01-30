import { initialData } from "./initialData";
const COUNTER_DATA = "counterData";

export const counterData = (data) => {
  const dataObject = JSON.stringify(data);
  localStorage.setItem(COUNTER_DATA, dataObject);
};


export const getCounterData = () => {
  if (localStorage.getItem(COUNTER_DATA)) {
    const data = localStorage.getItem(COUNTER_DATA);
    return JSON.parse(data);
  } else {
    return initialData;
  }
};
