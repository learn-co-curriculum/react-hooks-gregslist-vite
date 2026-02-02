import Header from "./Header";
import ListingForm from "./ListingForm";
import ListingsContainer from "./ListingsContainer";
import { useState, useEffect } from "react";

function App() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(r => {
        if (!r.ok) { throw new Error("failed to get listings") }
        return r.json()
      })
      .then(data => setListings(data))
      .catch(error => console.log(error.message))
  }, [])

  const addListing = newListing => setListings(previousListing =>
    [...previousListing, newListing]
  )

  return (
    <div className="app">
      <Header />
      <ListingForm addListing={addListing} />
      <ListingsContainer listings={listings} />
    </div>
  );
}

export default App;
