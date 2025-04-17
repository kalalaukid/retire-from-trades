export default function Home() {
  return (
    <main style={{
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '700px',
      margin: '0 auto',
      color: '#222'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        👷‍♂️ Retire From The Trades 🛠️
      </h1>

      <p style={{ marginBottom: '1rem' }}>
        Most tradesmen 🛠️ don’t get a pension.
      </p>

      <p style={{ marginBottom: '1rem' }}>
        This affordable retirement strategy is built for skilled pros like you — in HVAC, roofing, electrical, plumbing, and more.
      </p>

      <p style={{ marginBottom: '2rem' }}>
        No employer match? No problem. 🔒 Your life insurance policy can do the heavy lifting 💪 — tax-free.
      </p>

      <p style={{ fontWeight: 'bold', marginBottom: '1rem', color: '#005FCE' }}>
        👇 Fill out the quick form below to get started:
      </p>

      <p style={{ marginBottom: '2rem' }}>
        Take 60 seconds to see how a tax-free retirement plan built for tradesmen could help you retire with confidence — even without a pension or 401(k).
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
        style={{ borderRadius: '8px', border: '1px solid #ddd' }}
      ></iframe>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            var d=document,w="https://tally.so/widgets/embed.js",v=function(){
              "undefined"!=typeof Tally?Tally.loadEmbeds():
              d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e){
                e.src=e.dataset.tallySrc;
              });
            };
            if("undefined"!=typeof Tally)v();
            else if(!d.querySelector('script[src="'+w+'"]')){
              var s=d.createElement("script");
              s.src=w;
              s.onload=v;
              s.onerror=v;
              d.body.appendChild(s);
            }
          `
        }}
      />

      <footer style={{
        fontSize: '0.75rem',
        color: '#666',
        marginTop: '4rem',
        borderTop: '1px solid #ddd',
        paddingTop: '1rem'
      }}>
        By submitting this form, you agree to be contacted by a licensed agent. This is not an offer of coverage. Coverage may be subject to underwriting. © {new Date().getFullYear()} Retire From the Trades. All rights reserved.
      </footer>
    </main>
  );
}
