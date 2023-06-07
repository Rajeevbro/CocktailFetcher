import React, { useRef } from "react";
import { useAppContext } from "../Context/DataRackContext.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Searchbox = () => {
  const { searchTerm, setSearchTerm } = useAppContext();

  const searchText = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchText.current.value);
  };

  return (
    <section className="searchbox">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-block">
          <label htmlFor="searchBox" className="form-label">
            Search:
          </label>
          <input
            className="form-input"
            type="text"
            name="searchBox"
            id="searchBox"
            ref={searchText}
            placeholder={searchTerm}
          />
        </div>
      </form>
    </section>
  );
};

export default Searchbox;
