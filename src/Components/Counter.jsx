import { useDispatch } from "react-redux";
import { decrementCounter, incrementCounter } from "../redux/action";

function Counter() {
  const dispatch = useDispatch();

  const handleChange = (val) => {
    if (val === 1) {
      const myAct = incrementCounter(val);
      dispatch(myAct);
    } else if (val === -1) {
      const myAct = decrementCounter(val);
      dispatch(myAct);
    }
  };

  return (
    <div>
      <button onClick={() => handleChange(+1)}>Increase</button>
      <button onClick={() => handleChange(-1)}>Decrease</button>
    </div>
  );
}

export default Counter;
