import { useState } from "react";

function Search({ onSearch }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  const [search, setSearch] = useState("")

  function handleSearch(event) {
    const searchText = event.target.value
    setSearch(searchText)
    onSearch(searchText)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
