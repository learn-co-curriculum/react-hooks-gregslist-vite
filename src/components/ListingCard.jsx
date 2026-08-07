function ListingCard({
  id,
  description,
  image,
  location,
  favorite,
  updateListing,
  deleteListing,
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

  const handleDelete = () => {
    fetch(`http://localhost:6001/listings/${id}`, { method: "DELETE" })
      .then((res) => {
        if (!res.ok) {
          throw new Error("failed to delete item");
        }
        deleteListing(id);
      })
      .catch((error) => console.log(error));
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
        <button className="emoji-button delete" onClick={handleDelete}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
