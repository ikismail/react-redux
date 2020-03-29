import {
  LOAD_PERSONS,
  IS_PERSON_LOADING,
  PERSON_LOADED
} from "../actions/person.types";

const initialState = {
  persons: [],
  listLoading: false
};
const ProductReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_PERSONS:
      console.log(`*** ${type} ***`);
      return {
        ...state,
        persons: payload
      };
    case IS_PERSON_LOADING:
      console.log(`*** ${type} ***`);
      return {
        ...state,
        listLoading: payload
      };
    case PERSON_LOADED:
      console.log(`*** ${type} ***`);
      return {
        ...state,
        persons: payload,
        listLoading: false
      };
    default:
      return state;
  }
};

export default ProductReducer;
