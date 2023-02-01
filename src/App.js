import { useSelector, useDispatch } from "react-redux";
import * as ACTIONS from './store/types';
function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <div>
        <button onClick={() => dispatch({ type: ACTIONS.COUNTER_INCREMENT })}>+</button>
        <button onClick={() => dispatch({ type: ACTIONS.COUNTER_DECREMENT })}>-</button>
        <button onClick={() => dispatch({ type: ACTIONS.COUNTER_MULTIPLY, payload: 5 })}>*5</button>
        <button onClick={() => dispatch({ type: ACTIONS.COUNTER_DIVIDE, payload: 5 })}>/5</button>
        <button onClick={() => dispatch({ type: ACTIONS.COUNTER_INCREMENT_BY_FACTOR, payload: 10 })}>+10</button>
        <button onClick={() => dispatch({ type: ACTIONS.COUNTER_DECREMENT_BY_FACTOR, payload: 10 })}>-10</button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: ACTIONS.SIGN_IN })}>Log In</button>
      </div>
      {
        isLogged ? <h3>Valuable Information I should see</h3> : ''
      }
    </div>
  );
}

export default App;
