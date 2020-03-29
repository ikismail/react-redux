import axios from "axios";
import { BASE_URL } from "../environment";

/**
 * Create an Axios Client with defaults
 */
const client = axios.create({
  baseURL: `${BASE_URL}`
});

export default client;
