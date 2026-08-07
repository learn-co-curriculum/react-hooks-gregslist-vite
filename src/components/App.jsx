import { useEffect, useState } from "react";
import Header from "./Header";
import ListingForm from "./ListingForm";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  //use effect with empty dep array
  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((res) => {
        if (!res.ok) {
          throw new Error("failed to get listings");
        }
        return res.json();
      })
      .then(setListings)
      .catch((error) => console.error(error));
  }, []);

  const addListing = (newListing) =>
    setListings((prev) => [...prev, newListing]);

  const updateListing = (updatedListing) =>
    setListings((prev) =>
      prev.map((listing) =>
        listing.id === updatedListing.id ? updatedListing : listing,
      ),
    );

  const deleteListing = (deletedId) =>
    setListings((prev) => prev.filter((listing) => listing.id !== deletedId));

  return (
    <div className="app">
      <Header />
      <ListingForm addListing={addListing} />
      <ListingsContainer
        listings={listings}
        updateListing={updateListing}
        deleteListing={deleteListing}
      />
    </div>
  );
}

export default App;
