import ListingCard from "./ListingCard";

function ListingsContainer({ listings }) {
  return (
    <ul className="cards">
      {listings.map((listing) => (
        <ListingCard
          key={listing.id}
          description={listing.description}
          image={listing.image}
          location={listing.location}
          favorite={listing.favorite}
          price={listing.price}
        />
      ))}
    </ul>
  );
}

export default ListingsContainer;