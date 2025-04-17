export default function Home() {
  return (
    <main style={{
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '700px',
      margin: '0 auto',
      backgroundColor: '#111',
      color: '#f9f9f9',
      borderRadius: '10px',
    }}>
      <h1 style={{ color: '#ffd700', fontSize: '2.2rem' }}>
        👷‍♂️ Retire From The Trades 🛠️
      </h1>

      <p>Most tradesmen 🛠️ don’t get a pension.</p>

      <p>
        This affordable retirement strategy is built for skilled pros like you — in HVAC, roofing,
        electrical, plumbing, and more.
      </p>

      <p>
        No employer match? No problem. 🧰 Your life insurance policy can do the heavy lifting 💪 — tax-free.
      </p>

      <p style={{
        fontWeight: 'bold',
        color: '#ffd700',
        marginTop: '2rem',
      }}>
        ⬇️ Fill out the quick form below to get started:
      </p>

      <p style={{ fontSize: '1rem', color: '#ccc' }}>
        Take 60 seconds to see how a tax-free retirement plan built for tradesmen could help you retire
        with confidence — even without a pension or 401(k).
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
        style={{ borderRadius: '10px', marginTop: '2rem' }}
      ></iframe>

      <script
        dangerouslySetInnerHTML={{
          __html: `
          var d=document,w="https://tally.so/widgets/embed.js",v=function(){
            "undefined"!=typeof Tally?Tally.loadEmbeds():
            d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e){
              e.src=e.dataset.tallySrc
            });
          };
          if("undefined"!=typeof Tally)v();
          else if(d.querySelector('script[src="'+w+'"]')==null){
            var s=d.createElement("script");
            s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);
          }
        `
        }}
      />

      <footer style={{
        fontSize: '0.75rem',
        color: '#666',
        marginTop: '3rem',
        borderTop: '1px solid #333',
        paddingTop: '1rem',
        textAlign: 'center'
      }}>
        *Not affiliated with or endorsed by any employer or union. Insurance products issued by licensed agents through Symmetry Financial Group.
      </footer>
    </main>
  );
}
