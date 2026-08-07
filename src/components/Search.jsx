import { useState } from "react";

function Search({ onSearch }) {
  const [filter, setFilter] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
          onSearch(e.target.value);
        }}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
