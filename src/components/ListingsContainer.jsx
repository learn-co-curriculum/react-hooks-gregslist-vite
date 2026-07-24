import ListingCard from "./ListingCard";
//destructured listings prop from App component
function ListingsContainer({ listings }) {
  return (
    <main>
      <ul className="cards">
        {listings.map(listing => <ListingCard key={listing.id} {...listing} 
        />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
