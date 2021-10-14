import axios from "axios";

export default axios.create({
  baseURL: "https://sech-api.herokuapp.com/" //"http://localhost:5000/"
});
