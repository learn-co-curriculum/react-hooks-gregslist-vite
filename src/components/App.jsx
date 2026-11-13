import { useEffect, useState } from "react";
import Header from "./Header";
import ListingForm from "./ListingForm";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]); // add state for listings
  // add use effect to app component with empty dependency array
  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => {
        if (!r.ok) {
          throw new Error("Network response was not ok");
        }
        return r.json();
      })
      .then((data) => setListings(data))
      .catch((error) => console.error("There was a problem with the fetch operation:", error));
  }, []);
  return (
    <div className="app">
      <Header />
      <ListingForm />
      <ListingsContainer listings={listings} />
    </div>
  );
}

export default App;
