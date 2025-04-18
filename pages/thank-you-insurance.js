export default function ThankYouInsurance() {
  return (
    <main
      style={{
        fontFamily: 'Arial, sans-serif',
        background: 'linear-gradient(to right, #f0f8ff, #e6f2ff)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '3rem 2rem',
          maxWidth: '600px',
          width: '100%',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          ✅ You're All Set!
        </h1>
        <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
          Thanks for reaching out. I’ll be in touch shortly to help you plan your retirement strategy.
        </p>
        <p style={{ fontSize: '1rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>
          Want to skip the line?
        </p>
        <a
          href="https://cal.com/joshua-dickman/15min"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#0077cc',
            color: '#fff',
            padding: '0.75rem 1.5rem',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            display: 'inline-block',
          }}
        >
          Book a Time Now
        </a>
      </div>
    </main>
  );
}
<!-- Meta Pixel Thank You Event -->
<script>
  if (typeof fbq === 'function') {
    fbq('trackCustom', 'InsuranceLeadSubmitted');
  }
