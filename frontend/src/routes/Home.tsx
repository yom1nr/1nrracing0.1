// frontend/src/routes/Home.tsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Welcome to 1nr Racing Team©</h1>
        <p>1nr Racing Team© Official Website</p>
      </section>

      <section id="news" className="news">
        <article className="card">
          <img src="/assets/race1.jpg" alt="Race Highlights" className="card-img" />
          <h3>Race Highlights</h3>
          <p>All the action from the weekend.</p>
        </article>
        <article className="card">
          <img src="/assets/team1.jpg" alt="Race Team Update" className="card-img" />
          <h3>Team Update</h3>
          <p>Season 2021 Result.</p>
        </article>
        <article className="card">
          <img src="/assets/tech.jpg" alt="Tech Talk" className="card-img" />
          <h3>Tech Talk</h3>
          <p>Bike upgrades explained.</p>
        </article>
      </section>

      {/* Contact */}
      <section id="contact" className="contact" style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Contact :</h2>
        <p>
          <FaFacebookF style={{ marginRight: '8px', color: '#e7e7e7ff' }} />
          Facebook: 1nr Racing Team
        </p>
        <p>
          <FaInstagram style={{ marginRight: '8px', color: '#e7e7e7ff' }} />
          Instagram: 1nrracingteam
        </p>
        <p>
          <FaEnvelope style={{ marginRight: '8px', color: '#e7e7e7ff' }} />
          Email: contact@1nrteam.com
        </p>
      </section>
    </main>
  );
}

export default Home;
