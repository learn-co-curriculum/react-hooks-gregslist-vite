// import ListingCard from "./ListingC
import ListingCard from "./ListingCard";


function ListingsContainer({listings, updateListing, deleteListing }) {
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
                {listings.map(listing => <ListingCard 
          key={listing.id}
          {...listing} updateListing={updateListing} deleteListing={deleteListing}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
