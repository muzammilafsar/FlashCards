import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './reducer';
export const store = createStore(combineReducers({
    deckReducer: Reducer
}),{}, applyMiddleware(thunk));