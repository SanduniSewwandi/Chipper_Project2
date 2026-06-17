import { useState, useEffect, useRef, useCallback } from 'react';

const NAV_ITEMS = [
  { label: 'Home',       id: 'home'       },
  { label: 'About Us',   id: 'aboutus'    },
  { label: 'Road Map',   id: 'roadmap'    },
  { label: 'How To Buy', id: 'howtobuy'   },
  { label: 'Tokenomics', id: 'tokenomics' },
];

/** Walk offsetParent chain to get true document offset */
function getOffsetTop(el) {
  let top = 0, node = el;
  while (node) { top += node.offsetTop || 0; node = node.offsetParent; }
  return top;
}

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('Home');
  const [isOpen,     setIsOpen]     = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const isManual  = useRef(false);
  const manualTimer = useRef(null);

  /* Navbar background on scroll */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  /* Active section tracking — single element, scroll listener */
  const updateActive = useCallback(() => {
    if (isManual.current) return;
    const mid = window.scrollY + window.innerHeight * 0.35;
    let closest = NAV_ITEMS[0], minDiff = Infinity;
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (!el) return;
      const diff = Math.abs(mid - getOffsetTop(el));
      if (diff < minDiff) { minDiff = diff; closest = item; }
    });
    setActiveItem(closest.label);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', updateActive, { passive: true });
    updateActive();
    return () => window.removeEventListener('scroll', updateActive);
  }, [updateActive]);

  /* Click → smooth scroll */
  const handleNavClick = useCallback((e, item) => {
    e.preventDefault();
    setActiveItem(item.label);
    setIsOpen(false);
    isManual.current = true;
    clearTimeout(manualTimer.current);
    manualTimer.current = setTimeout(() => { isManual.current = false; }, 1200);
    const el = document.getElementById(item.id);
    if (el) window.scrollTo({ top: getOffsetTop(el), behavior: 'smooth' });
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[90] transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md'
          : 'bg-white/10 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-18">

          {/* ── Logo ── */}
          <button
            onClick={(e) => handleNavClick(e, NAV_ITEMS[0])}
            className="flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-lg"
            aria-label="Back to top"
          >
            <img
              src="/src/assets/image (66).png"
              alt="Chipper Logo"
              className="h-14 w-auto object-contain hover:scale-105 transition-transform"
            />
          </button>

          {/* ── Desktop links ── */}
          <div className="hidden md:flex items-center gap-3 lg:gap-6">
            {NAV_ITEMS.map((item) => {
              const active = activeItem === item.label;
              return (
                <button
                  key={item.label}
                  onClick={(e) => handleNavClick(e, item)}
                  aria-current={active ? 'page' : undefined}
                  className={`font-black text-base lg:text-lg px-5 py-1.5 rounded-full transition-all duration-200
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-black
                    ${active
                      ? 'bg-white text-black border-2 border-black neo-shadow-sm'
                      : 'text-black hover:opacity-70 hover:scale-105'
                    }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* ── Hamburger ── */}
          <button
            className="md:hidden p-2 rounded-xl text-black border-2 border-black bg-white neo-shadow-sm
              focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
            onClick={() => setIsOpen((o) => !o)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              {isOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile menu — animated with max-height trick ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white/95 backdrop-blur-lg
          ${isOpen ? 'max-h-96 border-b-2 border-black' : 'max-h-0'}`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {NAV_ITEMS.map((item) => {
            const active = activeItem === item.label;
            return (
              <button
                key={item.label}
                onClick={(e) => handleNavClick(e, item)}
                aria-current={active ? 'page' : undefined}
                className={`block w-full text-left font-black text-base px-4 py-2.5 rounded-xl transition-all
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-black
                  ${active
                    ? 'bg-[#FFE552] text-black border-2 border-black neo-shadow-sm'
                    : 'text-black/80 hover:bg-black/5'
                  }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}