import howToBuyBg from '../assets/Rectangle 6.png';
import chipperCharacter from '../assets/how to buy-image.png';
import topBackgroundOverlay from '../assets/image (76) 1.png';
import StepCard from '../components/howtobuy/StepCard';

const STEPS = [
  {
    id: 1,
    title: 'Set Up a Crypto Wallet',
    description:
      "First, you'll need a crypto wallet to store your Chipper tokens. You can use popular wallets like MetaMask. Ensure your wallet supports Ethereum-based tokens (ERC-20) for easy transactions.",
  },
  {
    id: 2,
    title: 'Purchase Ethereum (ETH)',
    description:
      'Buy Ethereum (ETH) on a crypto exchange like Binance, Coinbase, or Kraken. Ethereum is required to swap for Chipper tokens. You can buy ETH using your preferred payment method.',
  },
  {
    id: 3,
    title: 'Swap Ethereum for Chipper',
    description:
      'Once you have ETH in your wallet, head to a decentralized exchange (DEX) like Uniswap or SushiSwap. Connect your wallet, search for "Chipper" token, and swap your ETH for Chipper.',
  },
];

export default function HowToBuy() {
  return (
    <div id="howtobuy" className="w-full -mt-[20px] flex flex-col">

      {/* Top Overlay */}
      <div className="w-full pointer-events-none bg-white">
        <img
          src={topBackgroundOverlay}
          alt=""
          aria-hidden="true"
          className="w-full h-auto block object-contain -mt-[45px]"
        />
      </div>

      {/* Main Section */}
      <section
        className="relative w-full flex flex-col items-center justify-center py-4 md:py-6 px-20 sm:px-12 md:px-10 overflow-hidden"
        style={{
          backgroundImage:    `url(${howToBuyBg})`,
          backgroundSize:     'cover',         /* ← was '100% 100%', now cover */
          backgroundPosition: 'center center',
          backgroundRepeat:   'no-repeat',
        }}
      >
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-black text-black mb-10 md:mb-14 z-10">
          How to Buy
        </h2>

        {/* Cards + Desktop Character */}
        <div className="relative w-full max-w-6xl mx-auto flex flex-row items-center gap-4 md:gap-8 z-10">

          {/* Desktop Character */}
          <div className="hidden md:flex flex-shrink-0 items-end z-50 justify-center w-48 lg:w-60 translate-y-[30px] -translate-x-[60px] animate-float-y">
            <img
              src={chipperCharacter}
              alt="Chipper Character"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Step Cards */}
          <div className="flex flex-col sm:flex-row gap-6 md:gap-10 w-full">
            {STEPS.map((step) => (
              <StepCard
                key={step.id}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>

        {/* Mobile Character */}
        <div className="flex md:hidden mt-8 w-45 mx-auto z-10 animate-float-y">
          <img
            src={chipperCharacter}
            alt="Chipper Character"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* Bottom Overlay */}
      <div className="w-full pointer-events-none bg-white overflow-hidden">
        <img
          src={topBackgroundOverlay}
          alt=""
          aria-hidden="true"
          className="w-full h-auto block object-contain rotate-180 -scale-x-100"
        />
      </div>

    </div>
  );
}
