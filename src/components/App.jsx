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
  return (
    <div className="app">
      <Header />
      <ListingForm />
      <ListingsContainer listings={listings} />
    </div>
  );
}

export default App;
