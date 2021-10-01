import axios from "axios";
import {BASE_API, BASE_URL} from "../shared/constants/app"

const Http = axios.create({
    baseURL: BASE_API
});
export default Http;