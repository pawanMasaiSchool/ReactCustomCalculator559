import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./action";

export const myReducer = (currentState, myAction) => {
  switch (myAction.type) {
    case INCREMENT_COUNTER:
      return {
        ...currentState,
        myCount: myAction.payload + currentState.myCount
      };

    case DECREMENT_COUNTER:
      return {
        ...currentState,
        myCount: myAction.payload + currentState.myCount
      };

    default:
      return currentState;
  }
};
