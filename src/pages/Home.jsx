import homeBg        from '../assets/home-bg.png';
import HeroCard      from '../components/home/HeroCard';
import HeroTitle     from '../components/home/HeroTitle';
import HeroCharacter from '../components/home/HeroCharacter';

const heroVars = {
  '--char-offset-r': 'clamp(200px, 18vw, 350px)',
  '--char-w':        'clamp(176px, 14vw, 240px)',
  '--title-pad-r':   'clamp(80px, 10vw, 160px)',
};

const bgStyle = {
  backgroundImage:    `url(${homeBg})`,
  backgroundSize:     'cover',
  backgroundPosition: 'center center',
  backgroundRepeat:   'no-repeat',
};

export default function Home() {
  return (
    <div id="home" className="flex flex-col w-full" style={heroVars}>

      {/* ── DESKTOP (md and above) ── */}
      <section
        aria-label="Home hero desktop"
        className="relative z-10 w-full hidden lg:flex flex-col overflow-hidden"
        style={{ ...bgStyle, minHeight: '110vh' }}
      >
        <div className="max-w-7xl mx-auto w-full relative flex-grow pt-24 px-6 lg:px-8">

          {/* Card + Title group — left side */}
          <div className="
            absolute z-30
            left-4 md:left-6 lg:left-8
            top-24 md:top-26 lg:top-28
            md:w-[340px] lg:w-[480px]
            flex flex-col items-end
          ">
            <HeroCard className="w-full p-4 md:p-5 lg:p-6" />
            <HeroTitle
              className="text-5xl md:text-6xl lg:text-7xl mt-6 md:mt-8 lg:mt-15 text-right"
              style={{ paddingRight: 'var(--title-pad-r)' }}
            />
          </div>

          {/* Character — right side, sits on the path */}
          <HeroCharacter
            className="absolute bottom-0 z-40 animate-move-float"
            style={{
              right:  'var(--char-offset-r)',
              width:  'var(--char-w)',
            }}
          />

        </div>
      </section>

      {/* ── MOBILE (below md) ── */}
      <section
        aria-label="Home hero mobile"
        className="relative z-10 w-full flex lg:hidden flex-col"
        style={{ minHeight: '100svh' }}
      >
        {/* Background layer */}
        <div className="absolute inset-0 -z-10" style={bgStyle} />

        {/* 1. Title */}
        <HeroTitle
          className="w-full text-right text-5xl sm:text-6xl mt-20 mb-6"
          style={{ paddingRight: '55px' }}
        />

        {/* 2. Card */}
        <div className="w-full px-3">
          <HeroCard className="w-full p-5 sm:p-7" />
        </div>

        {/* 3. Character — mx-auto centers it, no wrapper div needed */}
        <HeroCharacter
          className="mx-auto mt-6 pb-16 animate-float-y"
          style={{ width: 'clamp(140px, 45vw, 320px)' }}
        />

      </section>

    </div>
  );
}