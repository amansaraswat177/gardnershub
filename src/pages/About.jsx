// src/pages/About.jsx
import './About.css'; // Import the CSS file

const About = () => (
  <div className="about-container">
    <h1>About Us</h1>
    
    <section className="company-history">
      <h2>Our Story</h2>
      <p>
        GardnersHub was founded with a simple but profound mission: to connect people with nature and promote holistic wellness. Our journey began with a deep love for plants and a belief in the transformative power of nature. From a small local nursery to a thriving online store, we have grown thanks to the support of our wonderful community and our unwavering commitment to quality and customer satisfaction.
      </p>
      <p>
        As we expanded, we saw an opportunity to merge our passion for horticulture with the principles of Ayurveda. We realized that the same care we put into nurturing plants could also be applied to the natural remedies that support our health. Thus, GardnersHub became a unique destination where you can find both vibrant plants and premium Ayurvedic products, all under one roof.
      </p>
    </section>

    <section className="our-values">
      <h2>Our Values</h2>
      <p>
        At GardnersHub, our core values are rooted in sustainability, quality, and community. We believe in sourcing our plants from ethical growers and our Ayurvedic remedies from reputable manufacturers who share our commitment to environmental and social responsibility. Every product we offer is carefully selected to ensure it meets the highest standards of excellence and supports a healthier lifestyle.
      </p>
      <p>
        We are also dedicated to fostering a sense of community and connection. Whether you’re a seasoned gardener or new to the world of plants and Ayurveda, we strive to provide a welcoming space where you can learn, grow, and thrive. Our knowledgeable team is always here to offer guidance and answer any questions you may have, ensuring that you have a positive and enriching experience with us.
      </p>
    </section>

    <section className="meet-the-team">
      <h2>Meet the Team</h2>
      <p>
        Our team at GardnersHub is composed of passionate horticulturists, wellness experts, and customer service professionals who are dedicated to making your experience exceptional. Each member brings a wealth of knowledge and a genuine enthusiasm for plants and holistic health. We take pride in our ability to combine expertise with personalized service, helping you find the perfect plants and remedies to suit your needs.
      </p>
      <p>
        Get to know the faces behind GardnersHub and learn more about their stories and expertise. We invite you to reach out and connect with us—we’re here to support you on your journey to a greener and healthier life.
      </p>
    </section>

    <section className="get-in-touch">
      <h2>Get in Touch</h2>
      <p>
        We value your feedback and are here to assist you with any inquiries or concerns. Whether you have questions about our products, need advice on plant care, or simply want to share your thoughts, we’d love to hear from you. Contact us through our <a href="/contact">Contact Page</a> or follow us on social media to stay updated with our latest news and offers.
      </p>
    </section>
  </div>
);

export default About;
