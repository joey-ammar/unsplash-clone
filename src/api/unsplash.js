import axios from "axios";
require("dotenv").config();

export default axios.create({
  baseURL: `Http://api.unsplash.com`,
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_KEY}`,
  },
});
