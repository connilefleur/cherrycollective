// WasIstCherry.jsx — modern fintech feature panel
function FeatureBlock({ num, title, body }) {
  return (
    <div style={{
      background: 'var(--white)', borderRadius: 'var(--radius-xl)',
      padding: 32, border: '1px solid var(--border)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <span style={{
          width: 36, height: 36, borderRadius: 999,
          background: 'var(--cherry-50)', color: 'var(--accent)',
          fontWeight: 700, fontSize: 14, letterSpacing: '-0.01em',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        }}>{num}</span>
        <h3 style={{ margin: 0, fontSize: 20, fontWeight: 600, letterSpacing: '-0.015em' }}>{title}</h3>
      </div>
      <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--fg-muted)' }}>{body}</p>
    </div>
  );
}

function WasIstCherry() {
  return (
    <section id="was" className="section">
      <div className="container">
        <div className="container-text" style={{ padding: 0, marginBottom: 48 }}>
          <p className="kicker">Was ist Cherry?</p>
          <h2 style={{
            fontFamily: 'var(--font-sans)', fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.05,
            letterSpacing: '-0.03em', margin: '0 0 20px',
          }}>
            Was ist <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)', letterSpacing: '-0.01em' }}>Cherry?</em>
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--fg-muted)', margin: '0 0 12px', maxWidth: 680 }}>
            Cherry ist eine <strong style={{ color: 'var(--fg)' }}>gemeinnützige Organisation</strong> — gegründet von Frauen, für Frauen.
          </p>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--fg-muted)', margin: '0 0 12px', maxWidth: 680 }}>
            Alles, was wir anbieten, ist kostenlos. Keine versteckten Kosten, kein Kleingedrucktes, keine Bank im Hintergrund.
          </p>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--fg-muted)', margin: 0, maxWidth: 680 }}>
            Bei Cherry lernst du in einem Workshop und persönlichem 1:1 Coaching alles, was du brauchst, um dein Geld selbst in die Hand zu nehmen.
          </p>
        </div>

        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <FeatureBlock num="01" title="Der Workshop"
            body="In knapp vier Stunden, verteilt auf wenige Abende, lernst du wie Investieren funktioniert, wie du deinen ersten ETF auswählst und wie du direkt mit deinem eigenen Sparplan startest." />
          <FeatureBlock num="02" title="Das 1:1 Coaching"
            body="Zusammen mit einem professionellen Coach schaust du, was dich bisher vom Investieren abgehalten hat — und was dich in Zukunft nicht mehr aufhalten wird." />
        </div>
      </div>
    </section>
  );
}
window.WasIstCherry = WasIstCherry;
