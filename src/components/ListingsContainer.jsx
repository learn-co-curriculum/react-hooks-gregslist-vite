import ListingCard from "./ListingCard";

// destructure listings from props
function ListingsContainer({ listings }) {
  return (
    <main>
      <ul className="cards">
        {listings.map(listing => <ListingCard 
          key={listing.id}
          {...listing}
        />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;