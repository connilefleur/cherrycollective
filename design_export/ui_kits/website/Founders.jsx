// Founders.jsx
function Founder({ name, role, photo, lines }) {
  return (
    <article className="founder-card" style={{
      background: 'var(--white)', borderRadius: 'var(--radius-2xl)',
      border: '1px solid var(--border)', overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ aspectRatio: '4/3', background: 'var(--bg-muted)' }}>
        <img src={photo} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
      <div style={{ padding: 28 }}>
        <p className="kicker" style={{ marginBottom: 6 }}>{role}</p>
        <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 24, margin: '0 0 16px', letterSpacing: '-0.02em' }}>{name}</h3>
        {lines.map((l, i) => (
          <p key={i} style={{ fontSize: 15, lineHeight: 1.6, margin: '0 0 10px', color: 'var(--fg-muted)' }}
             dangerouslySetInnerHTML={{ __html: l }} />
        ))}
      </div>
    </article>
  );
}

function Founders() {
  return (
    <section id="ueber" className="section">
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 40 }}>
          <p className="kicker">Über uns</p>
          <h2 style={{
            fontFamily: 'var(--font-sans)', fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.05,
            letterSpacing: '-0.03em', margin: 0,
          }}>
            Über <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)', letterSpacing: '-0.01em' }}>uns.</em>
          </h2>
        </div>
        <div className="founders-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          <Founder
            name="Katja Emcke" role="Gründerin"
            photo="../../assets/photo-set1-2.jpg"
            lines={[
              'Mir hat es immer Spaß gemacht, Geld zu verdienen. Aber es anzulegen — das habe ich jahrzehntelang nicht aktiv getan.',
              '<strong>Finanzielle Freiheit ist die kraftvollste Form weiblicher Selbstbestimmung — und die am wenigsten genutzte.</strong>',
            ]}
          />
          <Founder
            name="Alice Ascherfeld" role="Gründerin"
            photo="../../assets/photo-set1-3.jpg"
            lines={[
              'Bei uns zu Hause wurde nicht über Geld gesprochen. Auch in der Schule habe ich nichts über Finanzbildung gelernt.',
              '<strong>Intuition zählt. Wissen zählt.</strong> Beides wächst, wenn wir über Geld sprechen.',
            ]}
          />
          <Founder
            name="Charlotte Hasenkamp" role="Coach &amp; Gründungsmitglied"
            photo="../../assets/photo-set2-4.jpg"
            lines={[
              'Mit 31 habe ich meinen ersten ETF-Sparplan angelegt — zur Eröffnung des Online Broker-Kontos hat mein Mann mich gebracht. Mit 31.',
              'Heute zu starten, ist immer noch besser als morgen.',
            ]}
          />
        </div>
      </div>
    </section>
  );
}
window.Founders = Founders;
