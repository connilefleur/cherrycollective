// Header.jsx — sticky header + full-screen overlay nav on mobile
function CherryMark({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <circle cx="11" cy="22" r="6" />
      <circle cx="22" cy="22" r="6" />
      <path d="M16 4 C 14 9, 11 13, 9 17" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M16 4 C 18 9, 21 13, 23 17" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function Header({ onNav }) {
  const [open, setOpen] = React.useState(false);
  const links = [
    ['Was ist Cherry?', 'was'],
    ['Workshop', 'workshop'],
    ['Über uns', 'ueber'],
    ['Für dich?', 'istfuerdich'],
    ['Community', 'community'],
  ];

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'saturate(160%) blur(12px)',
        WebkitBackdropFilter: 'saturate(160%) blur(12px)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          paddingTop: 14, paddingBottom: 14, gap: 20,
        }}>
          <a href="#top" className="wordmark" onClick={(e) => { e.preventDefault(); onNav?.('top'); }}>
            <CherryMark /> cherry
          </a>
          <nav className="hide-md" style={{ display: 'flex', gap: 28, fontSize: 14, fontWeight: 500 }}>
            {links.map(([label, id]) => (
              <a key={id} href={`#${id}`}
                 onClick={(e) => { e.preventDefault(); onNav?.(id); }}
                 style={{ color: 'var(--fg)', textDecoration: 'none', letterSpacing: '-0.005em' }}>
                {label}
              </a>
            ))}
          </nav>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <a href="#waitlist" className="btn btn-primary btn-sm hide-sm"
               onClick={(e) => { e.preventDefault(); onNav?.('waitlist'); }}>
              Jetzt mitmachen
            </a>
            {/* Hamburger — CSS shows on ≤900px */}
            <button
              className="nav-burger"
              aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={open}
              onClick={() => setOpen(o => !o)}
            >
              <svg width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="0" y1="1" x2="22" y2="1" />
                <line x1="0" y1="13" x2="22" y2="13" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen overlay nav */}
      {open && (
        <div className="mobile-nav-overlay" role="dialog" aria-modal="true" aria-label="Navigation">

          {/* Top bar */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '14px var(--gutter)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            flexShrink: 0,
          }}>
            <a href="#top" className="wordmark" style={{ color: '#fff' }}
               onClick={(e) => { e.preventDefault(); setOpen(false); onNav?.('top'); }}>
              <CherryMark size={22} /> cherry
            </a>
            <button
              aria-label="Menü schließen"
              onClick={() => setOpen(false)}
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.14)',
                borderRadius: 999,
                color: 'rgba(255,255,255,0.8)',
                cursor: 'pointer',
                width: 38, height: 38, flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Nav links — space-evenly fills flex:1 so no dead zone */}
          <nav style={{
            display: 'flex', flexDirection: 'column',
            flex: 1,
            justifyContent: 'space-evenly',
            padding: '8px 0',
          }}>
            {links.map(([label, id], i) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => { e.preventDefault(); setOpen(false); onNav?.(id); }}
                style={{
                  color: 'rgba(255,255,255,0.92)',
                  textDecoration: 'none',
                  fontSize: 'clamp(24px, 6vw, 32px)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  padding: '6px var(--gutter)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  animation: `navFadeUp 0.32s cubic-bezier(0.22,0.61,0.36,1) ${0.05 + i * 0.045}s both`,
                }}
              >
                {label}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                     style={{ color: 'var(--cherry-500)', flexShrink: 0, opacity: 0.9 }}>
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </a>
            ))}
          </nav>

          {/* Bottom — mini stats + CTA */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            flexShrink: 0,
            animation: 'navFadeUp 0.36s cubic-bezier(0.22,0.61,0.36,1) 0.32s both',
          }}>
            {/* Mini stats */}
            <div style={{
              display: 'flex', gap: 0,
              padding: '18px var(--gutter) 16px',
            }}>
              {[['€0','Kostenlos'],['14','Plätze'],['1:1','Coaching']].map(([num, label], i) => (
                <div key={num} style={{
                  flex: 1,
                  borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                  paddingRight: i < 2 ? 'var(--gutter)' : 0,
                  paddingLeft: i > 0 ? 'var(--gutter)' : 0,
                }}>
                  <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 22, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1 }}>{num}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', marginTop: 4, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ padding: '4px var(--gutter) 32px' }}>
              <a
                href="#waitlist"
                className="btn btn-primary"
                style={{ width: '100%', fontSize: 16, justifyContent: 'center' }}
                onClick={(e) => { e.preventDefault(); setOpen(false); onNav?.('waitlist'); }}
              >
                Jetzt mitmachen
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </a>
              <p style={{
                margin: '14px 0 0', textAlign: 'center',
                fontSize: 13, color: 'rgba(255,255,255,0.35)',
              }}>
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--cherry-400)' }}>
                  Eine fängt an. Viele folgen.
                </em>
              </p>
            </div>
          </div>

        </div>
      )}
    </>
  );
}

window.Header = Header;
window.CherryMark = CherryMark;
