// src/pages/Home.jsx
import './Home.css'; // Import the CSS file
import qrImage from '../assets/qr.jpeg'; // Import the QR code image

const Home = () => (
  <div className="home-container">
    <h1>Welcome to GardnersHub</h1>
    <p>Your one-stop shop for all things plants!</p>
    <p>Welcome to GardnersHub, your ultimate destination for <span className="highlight">vibrant plants</span> and <span className="highlight">holistic Ayurvedic remedies</span>! At GardnersHub, we believe in nurturing not just your home but also your well-being. Discover a diverse range of lush indoor and outdoor plants that bring life and freshness to your space. Explore our selection of premium Ayurvedic medicines crafted to support your health naturally. Whether you’re a passionate gardener or seeking wellness solutions, GardnersHub offers quality products and expert advice to enhance your lifestyle. Join us in embracing nature’s gifts for a greener, healthier, and more balanced life!</p>
    <a href="/shop" className="button">Shop Now</a>
    <div className="qr-section">
      <img src={qrImage} alt="WhatsApp QR Code" />
    </div>
  </div>
);

export default Home;
