import axios from "axios"
import { baseUrl } from "../constants/constants";
                          // axios instance create
const instance = axios.create({
  baseURL:baseUrl

});                          
export default instance