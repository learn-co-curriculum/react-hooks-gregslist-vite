import Header from "./Header";
import ListingForm from "./ListingForm";
import ListingsContainer from "./ListingsContainer";
import { useState } from "react";

function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => {
        if (!r.ok) {
          throw new Error("failed to get listings");
        }
        return r.json();
      })
      .then(setListings)
      .catch((error) => console.log(error.message));
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
