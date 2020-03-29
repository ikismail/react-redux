import { combineReducers } from "redux";
import PersonReducer from "./person.reducer";

export default combineReducers({
  person: PersonReducer
});
