import PlantCard from '../components/PlantCard';
import './Shop.css'; // For custom styles

// Import images
import sprinklerImage from '../assets/plants/sprinkler.jpeg';
import ashwaImage from '../assets/plants/ashwa.jpeg';
import brahmiImage from '../assets/plants/brahmi.jpeg';
import fiddleImage from '../assets/plants/fiddle.jpeg';
import growbagImage from '../assets/plants/growbag.jpeg';
import hibicusImage from '../assets/plants/hibicus.jpeg';
import moneyImage from '../assets/plants/money.jpeg';
import parlorImage from '../assets/plants/parlor.jpeg';
import snakeImage from '../assets/plants/snake.jpeg';

const plants = [
  { image: sprinklerImage, name: 'WATER SPRINKLER', price: 'RS 150' },
  { image: ashwaImage, name: 'ASHWAGANDHA', price: 'RS 200' },
  { image: brahmiImage, name: 'BHARMI', price: 'RS 340' },
  { image: fiddleImage, name: 'FIDDLE LEAF', price: 'RS 190' },
  { image: growbagImage, name: 'GROW BAG', price: 'RS 70' },
  { image: hibicusImage, name: 'HIBISCUS', price: 'RS 240' },
  { image: moneyImage, name: 'MONEY TREE', price: 'RS 660' },
  { image: parlorImage, name: 'PARLOR PALM', price: 'RS 340' },
  { image: snakeImage, name: 'SNAKE PLANT', price: 'RS 200' },
  // Add more plants here
];

const Shop = () => (
  <div className="shop">
    <h1>Shop Plants</h1>
    <div className="plant-list">
      {plants.map((plant, index) => (
        <PlantCard key={index} image={plant.image} name={plant.name} price={plant.price} />
      ))}
    </div>
  </div>
);

export default Shop;
