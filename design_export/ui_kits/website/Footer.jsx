// Footer.jsx
function Footer() {
  return (
    <footer className="on-deep" style={{ background: 'var(--neutral-900)', color: '#fff', padding: '64px 0 36px' }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 32, marginBottom: 48,
        }} className="footer-top">
          <div>
            <a className="wordmark" href="#top" style={{ color: '#fff', marginBottom: 12, display: 'inline-flex' }}>
              <CherryMark /> cherry
            </a>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: 'rgba(255,255,255,0.65)', maxWidth: 320, margin: '12px 0 0' }}>
              Eine gemeinnützige Organisation, gegründet von Frauen, für Frauen. Cherry e.V. — Hamburg.
            </p>
          </div>
          <div className="footer-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', margin: 0 }}>Cherry</p>
              <a href="#was" style={{ color: 'rgba(255,255,255,0.9)' }}>Was ist Cherry?</a>
              <a href="#istfuerdich" style={{ color: 'rgba(255,255,255,0.9)' }}>Ist Cherry für dich?</a>
              <a href="#ueber" style={{ color: 'rgba(255,255,255,0.9)' }}>Über uns</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', margin: 0 }}>Workshop</p>
              <a href="#workshop" style={{ color: 'rgba(255,255,255,0.9)' }}>Workshop &amp; Coaching</a>
              <a href="#waitlist" style={{ color: 'rgba(255,255,255,0.9)' }}>Jetzt mitmachen</a>
              <a href="#community" style={{ color: 'rgba(255,255,255,0.9)' }}>Community</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', margin: 0 }}>Rechtliches</p>
              <a href="#" style={{ color: 'rgba(255,255,255,0.9)' }}>Impressum</a>
              <a href="#" style={{ color: 'rgba(255,255,255,0.9)' }}>Datenschutz</a>
            </div>
          </div>
        </div>
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.12)',
          paddingTop: 24, fontSize: 12, color: 'rgba(255,255,255,0.5)',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
        }}>
          <span>© Cherry e.V. — eingetragener gemeinnütziger Verein, Hamburg.</span>
          <span><em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--cherry-300)' }}>Eine fängt an. Viele folgen.</em></span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
