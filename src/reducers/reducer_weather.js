import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action){
  switch (action.type){
  case FETCH_WEATHER:
      ///creates a new array with the old array data and the new data
      //and returns it
    // return state.concat([action.payload.data]);
    //this is es6 syntax for ^
    return [ action.payload.data, ...state];
  }

  return state;
}
