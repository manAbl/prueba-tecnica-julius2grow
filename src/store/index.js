import { createStore } from 'redux';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  employees: [],
  currentEmployee: {}
};
const store = createStore(reducer, initialState, composeWithDevTools());

export default store;
