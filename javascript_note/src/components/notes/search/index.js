import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Search = (props) => {
  const [query, setQuery] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      props.searchNote(query);
    }
  };

  return (
    <div className="columns is-centered" breakpoint="mobile">
      <div className="column is-9 is-offset-1">
        <input
          className="input"
          type="text"
          name={query}
          value={query}
          placeholder="Search note..."
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          tabIndex="0"
        />
      </div>
      <div className="column is-1" mobile={2}>
        <a
          href="#"
          onClick={() => {
            props.fetchNotes();
            setQuery("");
          }}
        >
          <FontAwesomeIcon icon={faTimes} color="grey" className="is-pulled-left  " />
        </a>
      </div>
    </div>
  );
};

export default Search;
