import { createAction } from 'redux-actions';
import { bindActionCreators } from 'redux';

const generateActions = (keyPath, dispatcher) => {
	// console.log("Start genAction");
	const settings = {};
	settings.methods = ["setIn","deleteIn", "mergeIn", "updateIn"];
	settings.actionCreators = {};
    settings.methods.forEach((method) => {
        settings.actionCreators[method] = createAction(
        	method, 
        	(...args)=>{return method === "deleteIn" ? null : args[0];},
        	(...args)=>{return {path:keyPath,deep:method === "deleteIn" ? null : args[1]||null};}
        );
    });

	return bindActionCreators(settings.actionCreators, dispatcher);
}

export default generateActions;