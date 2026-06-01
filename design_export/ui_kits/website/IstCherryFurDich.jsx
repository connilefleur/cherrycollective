// IstCherryFurDich.jsx — modern dark panel with checklist
function IstCherryFurDich() {
  const items = [
    'Du fängst gerade an zu studieren — oder stehst am Anfang deiner Karriere — und denkst: <em>"Ich habe doch gar kein Geld zum Investieren."</em>',
    'Du schämst dich, Fragen über Geld zu stellen — weil du das Gefühl hast, das <strong>müsstest du eigentlich schon wissen.</strong>',
    'Du bist mit dem Glaubenssatz aufgewachsen: <strong>Über Geld spricht man nicht.</strong> Und merkst, dass er dich bis heute bremst.',
    'Du dachtest immer, Geld ist etwas, das du <strong>irgendwann später</strong> angehst — und plötzlich ist später jetzt.',
    'Du hast seit Monaten das Gefühl, dass du deine Finanzen <strong>selbst in die Hand nehmen</strong> solltest — schiebst es aber auf.',
    'Du siehst auf Social Media Versprechen von schnellem Reichtum — und fragst dich: <strong>Was ist real, wem kann ich vertrauen?</strong>',
    'Du möchtest verstehen, wie Geld wirklich funktioniert — aber bist <strong>nicht bereit, dafür teure Kurse zu bezahlen.</strong>',
    'Du hast schon versucht, dich über Geld zu informieren — und dich dabei <strong>überfordert oder von oben herab behandelt</strong> gefühlt.',
    'Du wünschst dir, dass dir jemand Sparen und Investieren <strong>einfach, ehrlich und ohne Fachjargon</strong> erklärt.',
    'Du hast Angst, die <strong>Geldfehler deiner Eltern oder Freundinnen zu wiederholen</strong> — und willst es anders machen.',
    'Du warst in der Schule und im Job immer gut — aber Geld fühlt sich an wie <strong>eine völlig andere Sprache.</strong>',
    'Du möchtest finanzielle Entscheidungen <strong>selbstbewusst treffen</strong> — statt zu raten.',
  ];
  return (
    <section id="istfuerdich" className="section section-deep">
      <div className="container">
        <div style={{ maxWidth: 720, margin: '0 0 48px' }}>
          <p className="kicker">Cherry — Let's talk money</p>
          <h2 style={{
            fontFamily: 'var(--font-sans)', fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.05,
            letterSpacing: '-0.03em', margin: '0 0 16px', color: '#fff',
          }}>
            Ist Cherry für <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--cherry-400)', letterSpacing: '-0.01em' }}>dich?</em>
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: 'rgba(255,255,255,0.7)', margin: 0 }}>
            Cherry ist für dich, wenn du dich in <strong style={{ color: '#fff' }}>mindestens einem</strong> dieser Sätze wiedererkennst.
          </p>
        </div>

        <ul className="grid-3-checklist" style={{
          margin: 0, padding: 0, listStyle: 'none',
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14,
        }}>
          {items.map((it, i) => (
            <li key={i} style={{
              display: 'grid', gridTemplateColumns: '20px 1fr', gap: 14,
              padding: '20px 22px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 'var(--radius-xl)',
              fontSize: 15, lineHeight: 1.55, color: 'rgba(255,255,255,0.88)',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: 'var(--cherry-400)', marginTop: 3 }}>
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span dangerouslySetInnerHTML={{ __html: it }} />
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 48, padding: '32px 0 0', borderTop: '1px solid rgba(255,255,255,0.12)', textAlign: 'center' }}>
          <p style={{
            fontFamily: 'var(--font-serif)', fontStyle: 'italic',
            fontSize: 26, lineHeight: 1.4, margin: 0, color: 'var(--cherry-300)',
            letterSpacing: '-0.01em',
          }}>
            Kein Vorwissen nötig. Keine dummen Fragen. Nur der Entschluss, anzufangen.
          </p>
        </div>
      </div>
    </section>
  );
}
window.IstCherryFurDich = IstCherryFurDich;
