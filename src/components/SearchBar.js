import React, { useState } from "react";

const SearchBar = (props) => {
  //On change input
  const [term, setTerm] = useState("");
  const onInputChange = (e) => {
    setTerm(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    props.passingOne(term);
    setTerm("");
  };

  return (
    <>
      <div className="forms">
        <div className=" ui segment">
          <h1>Unsplash</h1>
          <p>The internet’s source of freely-usable images.</p>
          <p>Powered by creators everywhere.</p>
          <form onSubmit={onFormSubmit} className="ui form">
            <div className="field">
              <label>Image Search</label>
              <input type="text" value={term} onChange={onInputChange} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
