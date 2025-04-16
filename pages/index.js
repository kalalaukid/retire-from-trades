pages/index.js
export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Retire From The Trades</h1>
      <p>This affordable retirement plan was built specifically for skilled tradesmen—HVAC, roofing, electrical, and beyond.</p>
      <p>No pension? No problem. Find out how life insurance can do the heavy lifting.</p>

      <iframe 
        data-tally-src="https://tally.so/embed/3qNeP8?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
        loading="lazy" width="100%" height="500" frameBorder="0" 
        marginHeight="0" marginWidth="0" title="Retire from trades">
      </iframe>

      <script>
        var d=document,w="https://tally.so/widgets/embed.js",v=function(){
          "undefined"!=typeof Tally?Tally.loadEmbeds():
          d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(
            (function(e){e.src=e.dataset.tallySrc})
          )};
        if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){
          var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
      </script>
    </main>
  );
}

