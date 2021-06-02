import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import axios from "axios";
require("dotenv").config();

const { REACT_APP_MY_ENV } = process.env;
console.log(REACT_APP_MY_ENV);
const App = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const onSearchSubmit = (term) => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${term}&client_id=${process.env.REACT_APP_MY_ENV}`
      )
      .then((response) => setData(response.data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    onSearchSubmit();
  }, []);

  return (
    <>
      <div className="main">
        <div className="ui container">
          <SearchBar className="search" passingOne={onSearchSubmit} />
        </div>
      </div>
      <div className="sub">
        <div className="container"></div>
        <div className="ui container" style={{ marginTop: "10px" }}>
          {loader ? "Loading" : <ImageList images={data} />}
        </div>
      </div>
    </>
  );
};
export default App;
