export default function Home() {
  return (
    <main style={{
      fontFamily: 'Arial, sans-serif',
      padding: '2rem',
      textAlign: 'center',
      lineHeight: '1.6',
      background: '#f9f9f9'
    }}>
      <h1>👷‍♂️ Retire From The Trades 🔧</h1>
      <p>Most tradesmen 🛠️ don’t get a pension.</p>
      <p>This affordable retirement plan is built for skilled pros like you — in HVAC, roofing, electrical, plumbing, and more.</p>
      <p>No employer match? No problem. 💼 Your life insurance policy can do the heavy lifting 💪 — tax-free.</p>
      
      <h3>👇 Fill out the quick form below to get started:</h3>

      <div style={{ marginTop: '2rem' }}>
        <iframe
          data-tally-src="https://tally.so/embed/3qNeP8?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="600"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Retire from trades"
        ></iframe>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
          var d=document,w="https://tally.so/widgets/embed.js",v=function(){
            if("undefined"!=typeof Tally){Tally.loadEmbeds();}
            else {
              d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((e)=>{
                e.src=e.dataset.tallySrc;
              });
            }
          };
          if(typeof Tally=="undefined"){
            var s=d.createElement("script");
            s.src=w;
            s.onload=v;
            d.body.appendChild(s);
          } else {
            v();
          }`
        }}
      />
    </main>
  );
}
