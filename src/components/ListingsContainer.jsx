// import ListingCard from "./ListingCard";

import ListingCard from "./ListingCard";

function ListingsContainer({ listings, updateListing }) {
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            {...listing}
            updateListing={updateListing}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
