// Hero.jsx — modern fintech hero: white canvas + dark contained card with bold display sans
function Hero({ onNav }) {
  return (
    <section id="top" className="section hero-section" style={{ paddingTop: 64, paddingBottom: 64 }}>
      <div className="container">
        <div style={{
          position: 'relative',
          background: 'linear-gradient(180deg, #14110f 0%, #0e0d0c 100%)',
          color: '#fff',
          borderRadius: 'var(--radius-2xl)', overflow: 'hidden',
          display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 0,
          boxShadow: '0 30px 80px -20px rgba(243,26,9,0.18), 0 8px 30px rgba(0,0,0,0.3)',
        }} className="hero-grid">
          {/* very subtle cherry glow + glass orb */}
          <div style={{ position: 'absolute', top: '-20%', right: '30%', width: 420, height: 420, background: 'radial-gradient(circle, rgba(243,26,9,0.35) 0%, rgba(243,26,9,0) 70%)', pointerEvents: 'none' }} />
          <div className="hero-badge" style={{ position: 'absolute', top: 28, right: 28, padding: '8px 14px', borderRadius: 999, background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(14px) saturate(160%)', WebkitBackdropFilter: 'blur(14px) saturate(160%)', border: '1px solid rgba(255,255,255,0.12)', fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.85)', display: 'inline-flex', alignItems: 'center', gap: 8, zIndex: 2 }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--cherry-400)' }} /> 5 von 14 Plätzen frei
          </div>
          <div style={{ padding: 'clamp(36px, 5vw, 72px)' }}>
            <p style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--cherry-300)', margin: '0 0 24px' }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--cherry-400)' }} />
              Cherry — Let's talk money
            </p>
            <h1 style={{
              fontFamily: 'var(--font-sans)', fontWeight: 700,
              fontSize: 'clamp(2.75rem, 6vw, 5.25rem)', lineHeight: 1.0,
              letterSpacing: '-0.04em', margin: '0 0 28px',
            }}>
              Let's talk <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--cherry-400)', letterSpacing: '-0.01em' }}>money.</em>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.5, margin: '0 0 14px', color: '#fff', maxWidth: 480 }}>
              Es gibt eine Investitionslücke. Du kannst sie schließen.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.6, margin: '0 0 32px', color: 'rgba(255,255,255,0.72)', maxWidth: 480 }}>
              Junge Frauen investieren seltener als junge Männer — nicht weil sie es nicht wollen, sondern weil niemand mit ihnen darüber gesprochen hat. Cherry ändert das.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href="#waitlist" className="btn btn-primary"
                 onClick={(e) => { e.preventDefault(); onNav?.('waitlist'); }}>
                Jetzt mitmachen
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: 2 }}><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
              <a href="#was" className="btn btn-ghost-deep"
                 onClick={(e) => { e.preventDefault(); onNav?.('was'); }}>Was ist Cherry?</a>
            </div>

            <div className="hero-stats" style={{ display: 'flex', gap: 32, marginTop: 56, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.12)', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 32, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1 }}>€0</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginTop: 4 }}>Komplett kostenlos</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 32, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1 }}>14</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginTop: 4 }}>Plätze pro Workshop</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 32, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1 }}>1:1</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginTop: 4 }}>Money Mindset Coaching</div>
              </div>
            </div>
          </div>
          <div className="hero-photo" style={{
            backgroundImage: "url('../../assets/photo-set2-3.jpg')",
            backgroundSize: 'cover', backgroundPosition: 'center',
            minHeight: 480,
          }} />
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
