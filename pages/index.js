import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.onload = () => {
      if (window.Tally) {
        window.Tally.loadEmbeds();
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial', maxWidth: '600px', margin: '0 auto' }}>
      <h1>👷‍♂️ Retire From The Trades 🔧</h1>
      <p>Most tradesmen 🛠 don’t get a pension.</p>
      <p>This affordable retirement plan is built for skilled pros like you — in HVAC, roofing, electrical, plumbing, and more.</p>
      <p>No employer match? No problem. 💼 Your life insurance policy can do the heavy lifting 💪 — tax-free.</p>
      <p>👇 Fill out the quick form below to get started:</p>

      <iframe
        data-tally-src="https://tally.so/embed/3qNeP8?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="600"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Retire from trades"
        style={{ border: 'none' }}
      ></iframe>
    </main>
  );
}
