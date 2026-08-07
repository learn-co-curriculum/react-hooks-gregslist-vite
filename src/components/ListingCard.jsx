function ListingCard({
  id,
  description,
  image,
  location,
  favorite,
  updateListing,
}) {
  const handleFavorite = () => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ favorite: !favorite }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("failed to favorite listing");
      })
      .then(updateListing)
      .catch((e) => console.error(e));
  };
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button
            className="emoji-button favorite active"
            onClick={handleFavorite}
          >
            ★
          </button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite}>
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> . {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
