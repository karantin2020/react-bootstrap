import {Map} from 'immutable';
import {flat_store} from "./immutableStore.js"


var api_state = Map({
  name: "Dude"
});

export const store = flat_store(api_state)