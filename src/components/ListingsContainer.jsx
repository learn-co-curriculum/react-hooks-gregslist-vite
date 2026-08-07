// import ListingCard from "./ListingCard";

import ListingCard from "./ListingCard";

function ListingsContainer({ listings }) {
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {listings.map((listing) => (
          <ListingCard key={listing.id} {...listing} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
