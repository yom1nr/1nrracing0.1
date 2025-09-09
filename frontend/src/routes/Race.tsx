// frontend/src/routes/Race.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Race: React.FC = () => {
  return (
    <main style={{ padding: '40px', textAlign: 'center' }}>
      
      <h1>Race Result</h1>
      {/* คุณสามารถเพิ่ม card หรือรูปภาพเหมือนใน Home */}
      <section className="race-cards">
         <article className="card">
          <a 
            href="https://youtu.be/L72SDn7XZcI?si=ZQknus0qs6f5vPgZ" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src="/assets/race12.jpg" alt="Race Team Update" className="card-img" />
            <h3>Race 12 ValenciaGP</h3>
            <p>Grand Prix of the Valencian Community.</p>
          </a>
        </article>
        <article className="card">
          <img src="/assets/race11.jpg" alt="Race Team Update" className="card-img" />
          <h3>Race 11 MalaysianGP</h3>
          <p>Grand Prix of Malaysia.</p>
        </article>
        <article className="card">
          <img src="/assets/race10.jpg" alt="Race Team Update" className="card-img" />
          <h3>Race 10 ArgentinaGP </h3>
          <p>Grand Prix of Argentina.</p>
        </article>
        <article className="card">
          <img src="/assets/race9.jpg" alt="Race Team Update" className="card-img" />
          <h3>Race 9 AragonGP</h3>
          <p>GRAN PREMIO DE ARAGÓN.</p>
        </article>
        <article className="card">
          <img src="/assets/race7.jpg" alt="Race Team Update" className="card-img" />
          <h3>Race 7 San MarinoGP</h3>
          <p>Gran Premio Octo di San Marino e della Riviera di Rimini.</p>
        </article>
        <article className="card">
          <img src="/assets/race6.jpg" alt="Race Team Update" className="card-img" />
          <h3>Race 6 Red bull Ring</h3>
          <p>Grand Prix of Spielberg.</p>
        </article>
        <article className="card">
          <img src="/assets/race5.jpg" alt="Race Team Update" className="card-img" />
          <h3>Race 5 Algarve</h3>
          <p>Grand Prix of Portugal.</p>
        </article>
        <article className="card">
            <img src="/assets/race4.jpg" alt="Race Team Update" className="card-img" />
            <h3>Race 4 Lusail</h3>
            <p>Grand Prix of Qatar.</p>
          </article>
        <article className="card">
          <img src="/assets/race3.jpg" alt="Race Team Update" className="card-img" />
          <h3>Race 3 Sachsenring</h3>
          <p>Granprix Deutschland Sachsenring.</p>
        </article>
        <article className="card">
            <img src="/assets/race2.jpg" alt="Race Team Update" className="card-img" />
            <h3>Race 2 Mugello</h3>
            <p>Gran Premio d'Italia.</p>
          </article>
        </section>
    </main>
  );
};

export default Race;
