import backgroundImage    from '../assets/image (77) 1.png';
import bottomSandImage    from '../assets/Rectangle 7.png';
import cornerOverlayImage from '../assets/image (78) 1.png';
import animatedGif        from '../assets/Gif.png';
import ContractAddress    from '../components/tokenomics/ContractAddress';
import CommunityBox       from '../components/tokenomics/CommunityBox';
import SocialLinks        from '../components/tokenomics/SocialLinks';

export default function Tokenomics() {
  return (
    <div id="tokenomics" className="w-full flex flex-col select-none overflow-x-hidden">

      {/* ══════════════════════════════════
          SECTION 1 — Main background scene
      ══════════════════════════════════ */}
      <div
        className="w-full relative"
        style={{
          aspectRatio: '780 / 540',
          minHeight:   'clamp(520px, 180vw, 900px)',
        }}
      >
        {/* Background layer — crops from both sides */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:    `url("${backgroundImage}")`,
            backgroundSize:     'cover',
            backgroundPosition: 'center center',
            backgroundRepeat:   'no-repeat',
          }}
        />

        <ContractAddress />

        {/* Boat GIF — MOBILE */}
        <img
          src={animatedGif}
          alt="Animated boat"
          className="md:hidden absolute z-10 pointer-events-none animate-slide-right
            top-[70%] left-1/4"
          style={{ width: 'clamp(8rem, 60vw, 500px)', marginTop: '-75px' }}
          draggable="false"
        />

        {/* Boat GIF — DESKTOP */}
        <img
          src={animatedGif}
          alt="Animated boat"
          className="hidden md:block absolute z-10 pointer-events-none animate-slide-right
            left-[10px] top-1/2"
          style={{ width: 'clamp(8rem, 60vw, 500px)', marginTop: '-135px' }}
          draggable="false"
        />

        <div className="absolute bottom-0 left-0 z-20 pointer-events-none" style={{ transform: 'translateY(31%)' }}>
          <img
            src={cornerOverlayImage}
            alt="Left accent artwork"
            style={{ width: 'clamp(6rem, 100vw, 800px)' }}
            className="h-auto object-contain"
            draggable="false"
          />
        </div>
      </div>

      {/* ══════════════════════════════════
          SECTION 2 — Sand base floor
      ══════════════════════════════════ */}
      <div
        className="w-full relative mt-[-1px]"
        style={{
          backgroundImage:    `url("${bottomSandImage}")`,
          backgroundSize:     '100% 100%',
          backgroundPosition: 'bottom center',
          backgroundRepeat:   'no-repeat',
          minHeight:          '160px',
          padding:            'clamp(1.5rem, 4vw, 3rem) clamp(1rem, 3vw, 3rem)',
        }}
      >
        {/* Desktop */}
        <div className="hidden md:flex w-full flex-row justify-between items-end gap-158">
          <SocialLinks />
          <CommunityBox />
        </div>

        {/* Mobile */}
        <div className="flex md:hidden w-full flex-col items-center gap-6">
          <CommunityBox mobile />
          <SocialLinks />
        </div>

      </div>
    </div>
  );
}