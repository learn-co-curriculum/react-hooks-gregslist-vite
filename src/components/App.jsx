import { useState, useEffect } from "react";
import Header from "./Header";
import ListingForm from "./ListingForm";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);

  //add useEffect to App 
  useEffect(() => {
    //make fetch request
    fetch("http://localhost:6001/listings")
    .then (r => {
      if (!r.ok) {throw new Error("failed to get listings")}
      return r.json()
    })
    .then(setListings)
    .catch(error => console.log(error.message))
  }, []);

  //define function to add new listing to state
  const addListing = newListing => 
    setListings(previousListings => [...previousListings, newListing])
  return (
    <div className="app">
      <Header />
      <ListingForm addListing={addListing} />
      <ListingsContainer listings={listings}/> 
    </div>
  );
}

export default App;
