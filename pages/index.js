export default function Home() {
  return (
    <main
      style={{
        padding: '2rem',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '700px',
        margin: '0 auto',
        lineHeight: '1.6',
        fontSize: '18px',
        color: '#1a1a1a'
      }}
    >
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        👷‍♂️ Retire From The Trades 🛠️
      </h1>

      <p><strong>Most tradesmen 🛠️ don’t get a pension.</strong></p>

      <p>
        This affordable retirement strategy is built for skilled pros like you — 
        in HVAC, roofing, electrical, plumbing, and more.
      </p>

      <p>
        No employer match? No problem. 🧰 Your life insurance policy can do the 
        heavy lifting 💪 — tax-free.
      </p>

      <p style={{ marginTop: '2rem', fontWeight: 'bold' }}>
        👇 Fill out the quick form below to get started:
      </p>

      <p style={{ fontSize: '1rem', marginBottom: '2rem' }}>
        Take 60 seconds to see how a tax-free retirement plan built for tradesmen 
        could help you retire with confidence — even without a pension or 401(k).
      </p>

      <iframe
        src="https://tally.so/embed/3qNeP8?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="800"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Retire from the Trades"
      ></iframe>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            var d=document,w="https://tally.so/widgets/embed.js",v=function(){
              "undefined"!=typeof Tally?Tally.loadEmbeds():
              d.querySelectorAll("iframe[data-tally-src]:not([src])")
              .forEach(function(e){e.src=e.dataset.tallySrc});
            };
            if("undefined"!=typeof Tally)v();
            else if(d.querySelector('script[src="'+w+'"]')==null){
              var s=d.createElement("script");
              s.src=w;
              s.onload=v;
              s.onerror=v;
              d.body.appendChild(s);
            }
          `
        }}
      />

      <p style={{ fontSize: '0.8rem', color: '#777', marginTop: '3rem' }}>
        * For informational purposes only. Not affiliated with any government agency. 
        This is a privately offered life insurance-based retirement strategy through licensed professionals.
      </p>
    </main>
  );
}
