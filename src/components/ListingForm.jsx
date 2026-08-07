import { useState } from "react";

const ListingForm = ({ addListing }) => {
  const [formData, setFormData] = useState({
    description: "",
    image: "",
    location: "",
  });

  const handleChange = (event) =>
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const newListing = {
      ...formData,
      favorite: false,
    };
    // make network call on submit
    fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newListing),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("failed to create listing");
      })
      .then((newListing) => {
        addListing(newListing);
        setFormData({
          description: "",
          image: "",
          location: "",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-container">
      <p>Create a New Listing</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-desc">Description:</label>
        <input
          id="new-desc"
          type="text"
          name="description"
          placeholder="description"
          value={formData.description}
          onChange={handleChange}
        />
        <label htmlFor="new-img">Image URL:</label>
        <input
          id="new-img"
          type="text"
          name="image"
          placeholder="image"
          value={formData.image}
          onChange={handleChange}
        />
        <label htmlFor="new-loc">Location:</label>
        <input
          id="new-loc"
          type="text"
          name="location"
          placeholder="location"
          value={formData.location}
          onChange={handleChange}
        />
        <input type="submit" value=" Create Listing " />
      </form>
    </div>
  );
};

export default ListingForm;
