import axios from "axios";
import {
  ALL_PERSON,
   
     
   
} from "../actions/index";

const initialState = {
  all_person: [],
  
   
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PERSON:
      console.log(action.payload)
      return {
        ...state,
        all_person:  [...state.all_person, action.payload],
      };
    

    default:
      return state;
  }
};////

 

export default reducer;