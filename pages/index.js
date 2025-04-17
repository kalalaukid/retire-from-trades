import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.onload = () => {
      if (window.Tally) Tally.loadEmbeds();
    };
    document.body.appendChild(script);
  }, []);

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial', maxWidth: '700px', margin: '0 auto' }}>
      <h1>👷 Retire From The Trades 🛠️</h1>

      <p>Most tradesmen 🛠️ don’t get a pension.</p>
      <p>
        This affordable retirement strategy is built for skilled pros like you — in HVAC, roofing,
        electrical, plumbing, and more.
      </p>
      <p>
        No employer match? No problem. 🧰 Your life insurance policy can do the heavy lifting 💪 —
        tax-free.
      </p>

      <p style={{ marginTop: '2rem', fontWeight: 'bold' }}>
        👇 Fill out the quick form below to get started:
      </p>

      <iframe
        data-tally-src="https://tally.so/embed/3qNeP8?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="800"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Retire from the Trades"
        style={{ border: 'none', marginTop: '1rem' }}
      ></iframe>

      <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '2rem' }}>
        Joshua Dickman – Licensed Insurance Broker (NPN: 21354779). Not affiliated with or endorsed
        by any government agency. Product availability may vary by state and carrier. This page is
        for informational purposes only and does not constitute a contract or guarantee of coverage.
      </p><p style={{ textAlign: 'center', marginTop: '2rem' }}>
  <a
    href="https://cal.com/joshua-dickman/15min"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      backgroundColor: '#000',
      color: '#fff',
      padding: '12px 24px',
      textDecoration: 'none',
      borderRadius: '8px',
      fontWeight: 'bold',
      display: 'inline-block'
    }}
  >
    📅 Book a Free 15-Min Call
  </a>
</p>

    </main>
  );
}
