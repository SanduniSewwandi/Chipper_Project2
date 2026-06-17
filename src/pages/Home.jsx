import homeBg        from '../assets/home-bg.png';
import HeroCard      from '../components/home/HeroCard';
import HeroTitle     from '../components/home/HeroTitle';
import HeroCharacter from '../components/home/HeroCharacter';

export default function Home() {
  return (
    <div id="home" className="flex flex-col w-full">

      {/* ═══════════════════════════════════
          DESKTOP  (md and above)
      ═══════════════════════════════════ */}
      <section
        aria-label="Home hero desktop"
        className="relative z-10  w-full hidden md:flex flex-col overflow-hidden"
        style={{
          backgroundImage:    `url(${homeBg})`,
          backgroundSize:     '100% 100%',
          backgroundPosition: 'center center',
          backgroundRepeat:   'no-repeat',
          minHeight:          '110vh',
        }}
      >
        <div className="max-w-7xl mx-auto w-full relative flex-grow pt-24 px-6 lg:px-8">

          <div className="
            absolute left-4 md:left-6 lg:left-8
            top-24 md:top-26 lg:top-28
            z-30
            w-[280px] md:w-[340px] lg:w-[480px]
            flex flex-col items-end
          ">
            <HeroCard className="w-full p-4 md:p-5 lg:p-6" />
            <HeroTitle className="
                text-5xl md:text-6xl lg:text-7xl
                mt-6 md:mt-8 lg:mt-15
                text-right
               " style={{ paddingRight: '160px' }} />
          </div>

         <HeroCharacter className="
  absolute right-[350px] md:right-[200px] lg:right-[250px]
  bottom-0 z-40
  w-44 md:w-52 lg:w-60
  animate-move-float
" />

        </div>
      </section>

      {/* ═══════════════════════════════════
          MOBILE  (below md)
      ═══════════════════════════════════ */}
      <section
        aria-label="Home hero mobile"
        className="relative z-10 w-full flex md:hidden flex-col"
        style={{ minHeight: '100svh' }}
      >
        {/* Background — separate layer, always full size */}
        <div
          className="absolute inset-0 -z-10 md:hidden"
          style={{
            backgroundImage:    `url(${homeBg})`,
            backgroundSize:     'cover',
            backgroundPosition: 'center center',
            backgroundRepeat:   'no-repeat',
          }}
        />

        {/* 1. Title */}
        <HeroTitle className="
             w-full text-right
             text-5xl sm:text-6xl
             mt-20 mb-6
             " style={{ paddingRight: '55px' }} />

        {/* 2. Card — edge to edge with small margin */}
        <div className="w-full px-3">
          <HeroCard className="w-full p-5 sm:p-7" />
        </div>

        {/* 3. Character — full size, not clipped */}
        <div className="w-full flex justify-center mt-6 pb-16">
          <HeroCharacter className="
            w-[60%] max-w-[180px] sm:max-w-[320px]
            animate-float-y
          " />
        </div>

      </section>

    </div>
  );
}
