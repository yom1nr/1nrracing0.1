import React from 'react';

function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Welcome to 1nr Racing Team©</h1>
        <p>1nr Racing Team© Official Website</p>
        <button onClick={() => {
          const el = document.querySelector('.news');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}>Explore News</button>
      </section>

      <section className="news">
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
    </main>
  );
}

export default Home;
