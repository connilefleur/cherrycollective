// Workshop.jsx — schedule + 3-evening breakdown (modern fintech)
function StatTile({ num, title, desc, dark, cherry }) {
  const bg = cherry ? 'var(--accent)' : (dark ? 'var(--neutral-900)' : 'var(--white)');
  const fg = (cherry || dark) ? '#fff' : 'var(--fg)';
  const sub = (cherry || dark) ? 'rgba(255,255,255,0.7)' : 'var(--fg-muted)';
  return (
    <div style={{
      background: bg, color: fg,
      border: (cherry || dark) ? 'none' : '1px solid var(--border)',
      borderRadius: 'var(--radius-xl)', padding: 28,
    }}>
      <div style={{
        fontFamily: 'var(--font-sans)', fontWeight: 700,
        fontSize: 56, lineHeight: 1, letterSpacing: '-0.04em',
        margin: '0 0 12px',
      }}>{num}</div>
      <h4 style={{ margin: '0 0 6px', fontSize: 15, fontWeight: 600, letterSpacing: '-0.01em' }}>{title}</h4>
      <p style={{ margin: 0, fontSize: 13, color: sub, lineHeight: 1.5 }}>{desc}</p>
    </div>
  );
}

function Evening({ num, dur, title, items }) {
  return (
    <div className="evening" style={{
      display: 'grid', gridTemplateColumns: '180px 1fr', gap: 32,
      padding: '32px 0', borderTop: '1px solid var(--border)',
    }}>
      <div>
        <p className="kicker" style={{ marginBottom: 6 }}>Abend 0{num}</p>
        <p style={{ margin: 0, color: 'var(--fg-muted)', fontSize: 13 }}>{dur}</p>
      </div>
      <div>
        <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 22, margin: '0 0 16px', letterSpacing: '-0.02em' }}>{title}</h3>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {items.map((it, i) => (
            <li key={i} style={{ display: 'flex', gap: 12, fontSize: 15, lineHeight: 1.55, color: 'var(--fg)' }}>
              <span style={{
                flexShrink: 0, marginTop: 6,
                width: 6, height: 6, borderRadius: 999, background: 'var(--accent)',
              }} />
              <span dangerouslySetInnerHTML={{ __html: it }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Workshop() {
  return (
    <section id="workshop" className="section" style={{ background: 'var(--bg-soft)' }}>
      <div className="container">
        <div className="container-text" style={{ padding: 0, marginBottom: 40 }}>
          <p className="kicker">Workshop &amp; Coaching</p>
          <h2 style={{
            fontFamily: 'var(--font-sans)', fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.05,
            letterSpacing: '-0.03em', margin: '0 0 16px',
          }}>
            Der Workshop <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)', letterSpacing: '-0.01em' }}>+ das Money Mindset Coaching.</em>
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--fg-muted)', margin: 0, maxWidth: 640 }}>
            Drei Abende hintereinander, jeweils 18:30 Uhr. Knapp vier Stunden insgesamt — und du weißt danach, wie Investieren funktioniert. Plus 1:1 Money Mindset Coaching.
          </p>
        </div>

        <div className="grid-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 56 }}>
          <StatTile num="3" title="Abende hintereinander" desc="In derselben Woche." />
          <StatTile num="18:30" title="Beginn" desc="Jeden Abend gleich." />
          <StatTile num="14" title="Plätze" desc="Pro Workshop. Persönlich." dark />
          <StatTile num="€0" title="Kostenlos" desc="Keine Bank im Hintergrund." cherry />
        </div>

        <div className="container-text" style={{ padding: 0 }}>
          <Evening num={1} dur="1,5 Stunden"
            title="Ankommen. Verstehen. Loslegen."
            items={[
              'Wir lernen uns kennen — wer sind die Frauen im Raum, was bringen sie mit, was hält sie zurück.',
              '<strong>Warum jetzt?</strong> Wir sprechen über die Dringlichkeit — warum es für Frauen besonders wichtig ist, früh anzufangen.',
              '<strong>Der Zinseszins.</strong> Wir spielen live am Zinseszinsrechner. Wie viel musst du monatlich sparen, um Millionärin zu werden?',
              '<strong>Depot eröffnen</strong> — gemeinsam, live.',
            ]}
          />
          <Evening num={2} dur="45 Minuten"
            title="Was ist ein ETF — und welcher ist der richtige?"
            items={[
              '<strong>ETFs verstehen.</strong> Was steckt drin, wie funktioniert ein ETF, und warum ist er für Einsteiger das richtige Instrument.',
              '<strong>Worauf man beim Kauf achtet.</strong> Kosten, Zusammensetzung, Anbieter — die wichtigsten Kriterien, einfach erklärt.',
              'Money Mindset Coaching — Breakout Session.',
            ]}
          />
          <Evening num={3} dur="45 Minuten"
            title="Sparplan einrichten. Budget verstehen. Fragen stellen."
            items={[
              '<strong>Sparplan einrichten</strong> — wir machen es gemeinsam, Schritt für Schritt.',
              '<strong>Budget.</strong> Wie viel kann ich investieren — und wo kann ich mir monatlich etwas dazu verdienen?',
              '<strong>Offene Fragen.</strong> Raum für alles, was noch unklar ist — keine Frage ist zu klein.',
            ]}
          />
        </div>
      </div>
    </section>
  );
}
window.Workshop = Workshop;
