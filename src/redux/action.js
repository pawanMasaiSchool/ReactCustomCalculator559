export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

export const incrementCounter = (val) => ({
  type: INCREMENT_COUNTER,
  payload: val
});

export const decrementCounter = (val) => ({
  type: DECREMENT_COUNTER,
  payload: val
});
