import chipperWave     from '../assets/tokenomics-image.png';
import tokenomicsBg   from '../assets/tokenomics-bg.png';
import screenShotImage from '../assets/Frame 1261154738 (1).png';
import contractImage   from '../assets/image (69) 1.png';

const STATS = [
  { label: 'Token Supply',    value: '2m'  },
  { label: 'Buy/Sell tax',    value: '0%'  },
  { label: 'Burnt Liquidity', value: null  },
];

export default function AboutUs() {
  return (
    <>
      {/* ═══════════════════════════════════
          MOBILE ONLY (hidden on md+)
      ═══════════════════════════════════ */}
      <div className="md:hidden relative w-full overflow-hidden px-14 sm:px-15 pt-10 pb-8">

        {/* Background layer — cover, crops from right */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:    `url(${tokenomicsBg})`,
            backgroundSize:     'cover',
            backgroundPosition: 'right center',
            backgroundRepeat:   'no-repeat',
          }}
        />

        {/* White card with vertical stat cards — UNCHANGED */}
        <div className="bg-white border-[3px] border-black rounded-[1.5rem] p-8 w-full z-20 relative px-12 mt-16">
          <h2
            className="text-xl font-black text-center mb-6 text-black"
            style={{ fontFamily: "'Baloo 2', cursive" }}
          >
            Chippernomics
          </h2>
          <div className="flex flex-col gap-3">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="bg-[#FFE552] border-[3px] border-black rounded-xl py-4 px-4 flex flex-col items-center justify-center text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              >
                <span
                  className="text-sm font-extrabold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  {s.label}
                </span>
                {s.value && (
                  <span
                    className="text-lg font-black mt-1"
                    style={{ fontFamily: "'Baloo 2', cursive" }}
                  >
                    {s.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ← NEW: Contract image — below white box */}
        <div className="w-full -mt-12 z-20 relative -translate-x-30 sm:-translate-x-8">
          <img
            src={contractImage}
            alt="Contract address"
            className="w-full h-auto object-contain"
            loading="lazy"
            draggable="false"
          />
        </div>

        {/* Character — below card, centered — animated up/right (mobile only) */}
        <div className="w-full flex justify-end   -mt-10 mr- pointer-events-none">
          <img
            src={chipperWave}
            alt="Chipper Character"
            className="w-[75%] max-w-xs h-auto object-contain animate-float-up-right z-50"
            loading="lazy"
            draggable="false"
          />
        </div>
      </div>

      {/* ═══════════════════════════════════
          DESKTOP ONLY (hidden below md)
      ═══════════════════════════════════ */}
      <section
        id="aboutus"
        className="relative w-full min-h-[600px] hidden md:flex items-center justify-end px-4 sm:px-8 md:px-16 lg:px-24 "
      >
        {/* Background layer — 100% 100%, unchanged */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:    `url(${tokenomicsBg})`,
            backgroundSize:     '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat:   'no-repeat',
          }}
        />

        {/* Chipper Character — left side — UNCHANGED */}
        <div className="
          absolute
          left-[-10px] sm:left-10 md:left-25 lg:left-85
          bottom-50
          z-50
          w-45 sm:w-64 md:w-80 lg:w-90
          pointer-events-none
        ">
          <img
            src={chipperWave}
            alt="Chipper Character"
            className="w-full h-auto object-contain"
            loading="lazy"
            draggable="false"
          />
        </div>

        {/* Right side wrapper — UNCHANGED */}
        <div className="relative z-30 w-full max-w-xl sm:max-w-xl md:max-w-xl mr-auto ml-20 md:ml-45 lg:ml-130 -mt-1 md:-mt-0">

          {/* White box — absolutely positioned, independent */}
          <div className="absolute -top-80 left-0 w-full bg-white border-[3px] border-black rounded-[2rem] pt-5 pr-15 pb-20 pl-15 md:pt-8 md:pr-24 md:pb-40 md:pl-24">
            <img
              src={screenShotImage}
              alt="Chippernomics"
              className="w-full h-auto object-contain"
              loading="lazy"
              draggable="false"
            />
          </div>

          {/* Contract image — absolutely positioned, independent */}
          <div className="absolute -top-[130px] left-0 w-full">
            <img
              src={contractImage}
              alt="Contract address"
              className="w-full h-auto object-contain"
              loading="lazy"
              draggable="false"
            />
          </div>

        </div>
      </section>
    </>
  );
}