// src/components/PlantCard.jsx
import './PlantCard.css'; // Import the CSS file

const PlantCard = ({ image, name, price }) => (
  <div className="plant-card">
    <img src={image} alt={name} className="plant-image" />
    <div className="plant-info">
      <h3 className="plant-name">{name}</h3>
      <p className="plant-price">{price}</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  </div>
);

export default PlantCard;
