import React from "react";
import "./Search.css"
function Search(props) {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="search">Search:</label>
          <input
            handleInputChange={props.handleInputChange}
            //value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Name"
            id="search"
            // eslint-disable-next-line react/jsx-no-duplicate-props
            className = "inputClass"
          />
          <button onClick={props.handleFormSubmit} className=" btn-primary mt-3">
            Search
          </button>
        </div>
      </form>
    );
  }

export default Search
