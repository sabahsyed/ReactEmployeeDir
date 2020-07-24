import React from "react";
import "./Search.css"

function Search(props) { 

  return (
    <form>
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="inputClass"
          placeholder="Search"
          id="search"
        />
      </div>
    </form>
  )
}

export default Search;