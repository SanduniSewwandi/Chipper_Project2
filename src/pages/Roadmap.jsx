
import chipperCharacter  from '../assets/image (72) 1.png';
import chipperCharacter2 from '../assets/image (72) 2.png';
import rectangle2        from '../assets/Rectangle 2.png';
import roadmapCenterImage from '../assets/roadmap-image.png';
import PhaseCard         from '../components/roadmap/PhaseCard';

const PHASES = [
  {
    id: '01',
    title: 'Phase 01',
    description:
      "In this initial phase, our focus is on laying the groundwork for Chipper. We'll establish a strong community by creating engaging content, building partnerships, and introducing the Chipper token to the world.",
  },
  {
    id: '02',
    title: 'Phase 02',
    description:
      "With the community in place, Chipper will officially launch its token on major exchanges. This phase will focus on liquidity, trading, and expanding the token's presence across multiple platforms.",
  },
  {
    id: '03',
    title: 'Phase 03',
    description:
      'In Phase 3, we will integrate Chipper with NFTs to create a unique experience for users. This will involve the creation of limited-edition NFT collectibles and interactive experiences that bring the Chipper brand to life.',
  },
  {
    id: '04',
    title: 'Phase 04',
    description:
      "In the final phase, Chipper will focus on securing strategic partnerships with other projects, platforms, and brands to drive global adoption. We will enhance our token's functionality and value through real-world use cases.",
  },
];

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative w-full flex flex-col items-center py-16 sm:py-30 px-4 sm:px-6 overflow-hidden"
      style={{
        backgroundImage:    `url(${rectangle2})`,
        backgroundSize:     'cover',
        backgroundPosition: 'center top',
        backgroundRepeat:   'no-repeat',
      }}
    >
      {/* ── TITLE ── */}
     <h2 className="
          text-3xl sm:text-4xl md:text-5xl font-black text-black
           z-50 text-center mb-8
           lg:absolute lg:top-12 lg:right-86 lg:mb-0
           " style={{ fontFamily: "'Fuzzy Bubbles', cursive" }}>
  Roadmap
</h2>

      {/* ════════════════════════════════════════
          MOBILE / TABLET  (hidden on lg+)
          Exact same layout as original
      ════════════════════════════════════════ */}
      <div className="lg:hidden w-full max-w-sm mx-auto flex flex-col gap-6 z-10">

        {/* Phase 01 — right aligned */}
        <PhaseCard phase={PHASES[0]} className="w-[68%] ml-auto" />

        {/* Phase 02 — card left, character overlapping right */}
        <div className="relative flex items-center">
          <PhaseCard phase={PHASES[1]} className="w-[68%] flex-shrink-0" />

          {/* Characters — overlapping right side */}
          <div className="absolute right-[-16px] bottom-[-20px] w-[180%] pointer-events-none z-20">
            {/* Shadow/back character */}
            <img
              src={chipperCharacter}
              alt=""
              aria-hidden="true"
              className="absolute -top-[120px] left-[200px] w-full object-contain scale-x-[-1]"
              style={{ zIndex: 1 }}
            />
            {/* Main character */}
            <img
              src={chipperCharacter}
              alt="Chipper Character"
              className="absolute bottom-[120px] left-[200px] w-full object-contain"
              style={{ zIndex: 2 }}
            />
          </div>

          {/* Center roadmap image */}
          <img
            src={roadmapCenterImage}
            alt="Roadmap Center"
            className="absolute right-[-15px] bottom-[-120px] w-[45%] object-contain z-40 scale-x-[-1]"
          />
        </div>

        {/* Phase 03 — right aligned, extra top margin for character space */}
        <PhaseCard phase={PHASES[2]} className="w-[68%] ml-auto mt-16" />

        {/* Phase 04 — center */}
        <PhaseCard phase={PHASES[3]} className="w-[68%] mx-auto" />
      </div>

      {/* ════════════════════════════════════════
          DESKTOP  (hidden below lg)
          Exact same scattered layout as original
      ════════════════════════════════════════ */}
      <div
        className="relative hidden lg:block w-full max-w-6xl mx-auto mt-16"
        style={{ minHeight: '650px' }}
      >
        {/* Characters — centered, large, behind cards */}
        <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
          <img
            src={chipperCharacter2}
            alt=""
            aria-hidden="true"
            className="w-full max-w-[930px] h-auto object-contain z-30 translate-x-[70%] translate-y-[77%]"
          />
          <img
            src={chipperCharacter}
            alt="Chipper Character"
            className="w-full max-w-[900px] h-auto object-contain z-20 -translate-x-[88%] -translate-y-[30%]"
          />
        </div>

        {/* Centre piece */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <img
            src={roadmapCenterImage}
            alt="Roadmap Centre"
            className="w-[14%] min-w-[140px] h-auto object-contain -translate-y-3 -translate-x-20"
          />
        </div>

        {/* Phase cards — exact same positions as original */}
        <PhaseCard phase={PHASES[0]} className="absolute -top-[5%]   left-[12%]   max-w-sm" />
        <PhaseCard phase={PHASES[1]} className="absolute top-[20%]  right-[10%]  max-w-sm" />
        <PhaseCard phase={PHASES[2]} className="absolute bottom-[20%] -left-[10%] max-w-sm" />
        <PhaseCard phase={PHASES[3]} className="absolute -bottom-[6%]  right-[16%] max-w-sm" />
      </div>

    </section>
  );
}
