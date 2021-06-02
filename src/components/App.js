import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
const App = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  console.log(loader);
  const onSearchSubmit = (term) => {
    unsplash
      .get(`/search/photos`, {
        params: {
          query: term,
        },
      })
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
