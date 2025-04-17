export default function Home() {
  return (
    <main
      style={{
        padding: '3rem 1rem',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '700px',
        margin: '0 auto',
        background: 'linear-gradient(to bottom, #ffffff, #e6f0fa)',
        borderRadius: '12px',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.05)'
      }}
    >
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        👷‍♂️ Retire From The Trades 🛠️
      </h1>

      <p style={{ fontSize: '1.1rem' }}>
        Most tradesmen 🛠️ don’t get a pension.
      </p>

      <p style={{ fontSize: '1.1rem' }}>
        This affordable retirement strategy is built for skilled pros like you — in HVAC, roofing, electrical, plumbing, and more.
      </p>

      <p style={{ fontSize: '1.1rem' }}>
        No employer match? No problem. 🔒 Your life insurance policy can do the heavy lifting 💪 — tax-free.
      </p>

      <p style={{ marginTop: '2rem', fontWeight: 'bold', fontSize: '1.1rem', color: '#1a73e8' }}>
        👇 Fill out the quick form below to get started:
      </p>

      <p style={{ fontSize: '1.05rem' }}>
        Take 60 seconds to see how a tax-free retirement plan built for tradesmen could help you retire with confidence — even without a pension or 401(k).
      </p>

      <div style={{ marginTop: '2rem' }}>
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
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
          var d=document,w="https://tally.so/widgets/embed.js",v=function(){
            "undefined"==typeof Tally?loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e){
              e.src=e.dataset.tallySrc
            });
          };
          if("undefined"==typeof Tally)v();
          else if(d.querySelector('script[src="'+w+'"]')==null){
            var s=d.createElement("script");
            s.src=w;
            s.onload=v;
            s.onerror=v;
            d.body.appendChild(s);
          }
        `,
        }}
      />

      <p style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#888' }}>
        *This is a general overview and not a solicitation for any specific insurance product. All insurance policies are subject to underwriting. For agent use only. Joshua Dickman is an independent licensed agent with Symmetry Financial Group.
      </p>
    </main>
  );
}
