export default function Home() {
  return (
    <main style={{
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '700px',
      margin: '0 auto',
      backgroundColor: '#f9fbfd',
      color: '#222'
    }}>
      <h1>👷‍♂️ Retire From The Trades 🛠️</h1>

      <p>Most tradesmen 🛠️ don’t get a pension.</p>

      <p>
        This affordable retirement strategy is built for skilled pros like you —
        in HVAC, roofing, electrical, plumbing, and more.
      </p>

      <p>
        No employer match? No problem. 🔒 Your life insurance policy can do the
        heavy lifting 💪 — tax-free.
      </p>

      <p style={{ marginTop: '2rem', fontWeight: 'bold', color: '#005bbb' }}>
        👇 Fill out the quick form below to get started:
      </p>

      <p style={{ fontSize: '16px' }}>
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
              "undefined"==typeof Tally?Tally.loadEmbeds():
              d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e){
                e.src=e.dataset.tallySrc
              })
            };
            if("undefined"==typeof Tally)v();
            else if(!d.querySelector('script[src="'+w+'"]')){
              var s=d.createElement("script");
              s.src=w, s.onload=v, s.onerror=v, d.body.appendChild(s)
            }
          `
        }}
      />

      <p style={{ fontSize: '12px', color: '#666', marginTop: '3rem' }}>
        *This page is for educational and informational purposes only. Results may vary. Not intended as financial or tax advice. Joshua Dickman is a licensed life insurance professional. All policies subject to underwriting and approval. Symmetry Financial Group® is a registered marketing name used by licensed agents. This site is not endorsed by or affiliated with Facebook™.
      </p>
    </main>
  );
}
