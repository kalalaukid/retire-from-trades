export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial', lineHeight: '1.6', maxWidth: '600px', margin: 'auto' }}>
      <h1>👷‍♂️ Retire From The Trades 🛠️</h1>
      <p>Most tradesmen 🧰 don’t get a pension.</p>
      <p>This affordable retirement plan is built for skilled pros like you — in HVAC, roofing, electrical, plumbing, and more.</p>
      <p>No employer match? No problem. 🧰 Your life insurance policy can do the heavy lifting 💪 — tax-free.</p>

      <p style={{ fontWeight: 'bold', marginTop: '2rem' }}>👇 Fill out the quick form below to get started:</p>

      <iframe
        data-tally-src="https://tally.so/embed/3qNeP8?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="500"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Retire from trades"
        style={{ marginTop: '1rem', minHeight: '700px', border: 'none' }}
      ></iframe>

      <script dangerouslySetInnerHTML={{
        __html: `
          var d=document,w="https://tally.so/widgets/embed.js",v=function(){
            "undefined"!=typeof Tally?Tally.loadEmbeds():
            d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e){
              e.src=e.dataset.tallySrc
            })
          };
          if("undefined"!=typeof Tally)v();
          else if(d.querySelector('script[src="'+w+'"]')==null){
            var s=d.createElement("script");
            s.src=w;
            s.onload=v;
            s.onerror=v;
            d.body.appendChild(s)
          }
        `
      }} />
    </main>
  );
}
