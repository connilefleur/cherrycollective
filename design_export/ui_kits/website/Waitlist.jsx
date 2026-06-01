// Waitlist.jsx
function Waitlist() {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', email: '', why: '' });
  const onSubmit = (e) => { e.preventDefault(); setSubmitted(true); };
  return (
    <section id="waitlist" className="section section-soft">
      <div className="container-narrow">
        <p className="kicker" style={{ textAlign: 'center' }}>Jetzt mitmachen</p>
        <h2 style={{
          fontFamily: 'var(--font-sans)', fontWeight: 700,
          fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.05,
          letterSpacing: '-0.03em', textAlign: 'center', margin: '0 0 16px',
        }}>
          Auf die <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)', letterSpacing: '-0.01em' }}>Warteliste.</em>
        </h2>
        <p style={{ textAlign: 'center', fontSize: 17, color: 'var(--fg-muted)', margin: '0 0 32px', lineHeight: 1.55 }}>
          2026 starten wir mit drei Workshops — jeweils <strong style={{ color: 'var(--fg)' }}>14 Plätze.</strong> Wir melden uns, sobald ein Platz frei wird.
        </p>

        <div className="waitlist-card" style={{
          background: 'var(--white)', padding: 32,
          borderRadius: 'var(--radius-2xl)',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow-sm)',
        }}>
          <div className="waitlist-progress" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '12px 18px', background: 'var(--accent-soft)',
            borderRadius: 'var(--radius-pill)',
            marginBottom: 24, fontSize: 13, fontWeight: 500, color: 'var(--cherry-800)',
          }}>
            <span>5 von 14 Plätzen noch frei</span>
            <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
              {Array.from({ length: 14 }).map((_, i) => (
                <span key={i} style={{
                  width: 8, height: 8, borderRadius: 999,
                  background: i < 9 ? 'var(--accent)' : 'var(--cherry-200)',
                }} />
              ))}
            </div>
          </div>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '24px 0' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 28, color: 'var(--accent)', marginBottom: 12, letterSpacing: '-0.02em' }}>
                Bis bald.
              </p>
              <p style={{ color: 'var(--fg-muted)' }}>Wir melden uns, sobald ein Platz frei wird. Schau in dein Postfach.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              <div className="field">
                <label htmlFor="wl-name">Vorname</label>
                <input id="wl-name" type="text" required placeholder="Wie heißt du?"
                       value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
              </div>
              <div className="field">
                <label htmlFor="wl-email">E-Mail</label>
                <input id="wl-email" type="email" required placeholder="dein@beispiel.de"
                       value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
              </div>
              <div className="field">
                <label htmlFor="wl-why">Warum möchtest du bei Cherry mitmachen?</label>
                <textarea id="wl-why" placeholder="Erzähl uns kurz von dir." value={form.why}
                          onChange={e => setForm(f => ({ ...f, why: e.target.value }))} />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: 8 }}>
                Auf die Warteliste
              </button>
            </form>
          )}
        </div>
        <p style={{ textAlign: 'center', marginTop: 18, fontSize: 14, color: 'var(--fg-muted)' }}>
          Kein Druck. Keine Verpflichtung. Nur ein erster Schritt.
        </p>
      </div>
    </section>
  );
}
window.Waitlist = Waitlist;
