/*
 * Module dependencies
 */

import Immutable from 'immutable';
import { 
	createStore, 
	// combineReducers, 
	// bindActionCreators, 
	applyMiddleware,
	// dispatch
} from 'redux';

import promiseMiddleware from 'redux-promise';

const flatReducer = (state=Immutable.Map({}), action) => {
	if (action && action.error) {
		return state;
	} else {
		const payload = action.payload;
		const keyPath = action.meta && action.meta.path;
		const method = action.type;
		if (payload && keyPath && method) {
			return state[method] && state[method](keyPath,payload);
		} else if (method === "deleteIn") {
			return state[method] && state[method](keyPath);
		} else if (!payload && method === "setIn") {
			return state[method] && state[method](keyPath, typeof payload === "string" ? "" : null);
		} else {
			return state;
		}
	}
};

const logger = store => next => action => {
  console.log(action.type);
  console.log('dispatching', store.getState().toJS());
  let result = next(action);
  console.log('next state', store.getState().toJS());
  console.log(action.type);
  return result;
};

const createStoreWithMiddleware = applyMiddleware(
	promiseMiddleware/*,
	logger*/
)(createStore);

export const flat_store = function(api_state) {
	return createStoreWithMiddleware(flatReducer, api_state);
}


/* TESTS */
/*


*/
/* TESTS END */