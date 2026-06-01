// Community.jsx — membership tiers
function Tier({ tag, title, price, period, desc, primary }) {
  return (
    <div style={{
      background: primary ? 'var(--neutral-900)' : 'var(--white)',
      color: primary ? '#fff' : 'var(--fg)',
      borderRadius: 'var(--radius-2xl)', padding: 28,
      border: primary ? 'none' : '1px solid var(--border)',
      display: 'flex', flexDirection: 'column',
    }}>
      <p className="kicker" style={{ color: primary ? 'var(--cherry-300)' : 'var(--accent)', marginBottom: 8 }}>{tag}</p>
      <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 22, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
        {title}
      </h3>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 16 }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 44, lineHeight: 1, color: primary ? '#fff' : 'var(--fg)', letterSpacing: '-0.04em' }}>{price}</span>
        <span style={{ fontSize: 13, color: primary ? 'rgba(255,255,255,0.6)' : 'var(--fg-muted)' }}>{period}</span>
      </div>
      <p style={{ margin: '0 0 24px', fontSize: 14, lineHeight: 1.55, color: primary ? 'rgba(255,255,255,0.75)' : 'var(--fg-muted)', flex: 1 }}>{desc}</p>
      <button className={primary ? 'btn btn-primary' : 'btn btn-outline'} style={{ width: '100%' }}>
        Mitglied werden
      </button>
    </div>
  );
}

function Community() {
  return (
    <section id="community" className="section">
      <div className="container">
        <div style={{ maxWidth: 720, margin: '0 auto 40px', textAlign: 'center' }}>
          <p className="kicker">Community</p>
          <h2 style={{
            fontFamily: 'var(--font-sans)', fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.05,
            letterSpacing: '-0.03em', margin: '0 0 16px',
          }}>
            <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)', letterSpacing: '-0.01em' }}>Community.</em>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--fg-muted)', margin: 0 }}>
            <strong style={{ color: 'var(--fg)' }}>Cherry ist eine gemeinnützige Organisation.</strong> Alles, was wir tun, finanziert sich durch Mitgliedsbeiträge und Förderungen — nicht durch Werbung, nicht durch Banken.
          </p>
        </div>
        <div className="grid-tiers" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          <Tier tag="bis 25 Jahre" title="Young Cherry" price="50 €" period="/ Jahr"
                desc="Zugang zur Community, allen künftigen Workshops und unserem Netzwerk aus Cherries." />
          <Tier tag="ab 25 Jahre" title="Cherry" price="100 €" period="/ Jahr"
                desc="Volles Mitglied. Das erste Jahr nach dem Workshop ist für alle kostenlos — automatisch, ohne Antrag." primary />
          <Tier tag="für Förderer" title="Cherry Patron" price="frei" period="wählbar / Jahr"
                desc="Für alle, die eine junge Frau in ihrem Leben haben — und wissen, dass dieses Gespräch früher stattfinden müsste." />
          <Tier tag="einmalig" title="Cherry Boost" price="∗" period="jeder Betrag hilft"
                desc="Du willst einfach unterstützen, ohne Verpflichtung? Perfekt. Spendenbescheinigung auf Anfrage." />
        </div>
      </div>
    </section>
  );
}
window.Community = Community;
