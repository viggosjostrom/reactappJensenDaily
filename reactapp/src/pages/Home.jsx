import React from 'react';
import '../css/Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <section className="home-hero">
        <h1>Welcome to Our Website</h1>
        <p>Your one-stop solution for all your digital needs.</p>
        <a href="/articles" className="home-btn">Explore Articles</a>
      </section>

      <section className="home-about">
        <h1>About Us</h1>
        <p>We are a team of passionate individuals committed to delivering the best digital experiences for our clients.</p>
      </section>

      <section className="home-services">
        <h1>Our Services</h1>
        <div className="home-services-list">
          <div className="service-item">
            <h1>Web Development</h1>
            <ul>
              <li>Creating responsive and modern websites.</li>
              <li>Using the latest technologies and frameworks.</li>
              <li>Ensuring a seamless user experience across devices.</li>
            </ul>
          </div>
          <div className="service-item">
            <h1>SEO Optimization</h1>
            <ul>
              <li>Helping your site rank better on search engines.</li>
              <li>Improving site speed and mobile responsiveness.</li>
              <li>Conducting keyword research and analysis.</li>
            </ul>
          </div>
          <div className="service-item">
            <h1>Content Creation</h1>
            <ul>
              <li>Crafting high-quality content for your audience.</li>
              <li>Developing engaging and informative articles.</li>
              <li>Creating content strategies that drive traffic.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;