import { initialData } from "./initialData";

export const CounterData = (data) => {
  const dataObject = JSON.stringify(data);
  localStorage.setItem("counterData", dataObject);
};

if (!localStorage.getItem("counterData")) {
  CounterData(initialData);
}

export const getCounterData = () => {
  const data = localStorage.getItem("counterData");
  return JSON.parse(data);
};
