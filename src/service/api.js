import axios from "axios";

export default axios.create({
    baseURL: "https://sech-api-rest.herokuapp.com/" //"https://sech-api.herokuapp.com/" 
});