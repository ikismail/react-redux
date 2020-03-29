import { IS_PERSON_LOADING, LOAD_PERSONS } from "./person.types";
import PersonService from "../../config/services/person.service";
import { Person } from "../model/person";

export const fetchAllPersons = () => async (
  dispatch: (arg0: { type: string; payload: any }) => void
) => {
  dispatch({ type: IS_PERSON_LOADING, payload: true });
  const { data }: { data: Person[] } = await PersonService.getAllPersons();
  console.log("data", data);
  dispatch({ type: LOAD_PERSONS, payload: data });
  dispatch({ type: IS_PERSON_LOADING, payload: false });
};
