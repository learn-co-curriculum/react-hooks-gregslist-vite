function ListingCard({ description, image, location, favorite, price }) {
  return (
    <li className="card">
      <div className="image">
        <span className="price">${price}</span>
        <img src={image} alt={description} />
      </div>

      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}

        <strong>{description}</strong>
        <span> · {location}</span>

        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;