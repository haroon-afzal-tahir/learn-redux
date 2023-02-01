import { COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_MULTIPLY, COUNTER_INCREMENT_BY_FACTOR, COUNTER_DIVIDE, COUNTER_DECREMENT_BY_FACTOR } from '../types'

export const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case COUNTER_INCREMENT:
      return state + 1;
    case COUNTER_DECREMENT:
      return state - 1;
    case COUNTER_MULTIPLY:
      return state * action.payload;
    case COUNTER_DIVIDE:
      if (action.payload === 0 || (state / action.payload) % 1 !== 0) {
        return state;
      }
      return state / action.payload;
    case COUNTER_INCREMENT_BY_FACTOR:
      return state + action.payload;
    case COUNTER_DECREMENT_BY_FACTOR:
      return state - action.payload;
    default:
      return state;
  }
}