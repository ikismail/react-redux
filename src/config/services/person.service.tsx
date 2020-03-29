import client from "../http_request";

const getAllPersons = (): Promise<any> => {
  return client.get("/persons");
};

const PersonService = {
  getAllPersons
};

export default PersonService;
