/**
 * HeroCharacter.jsx
 * Chipper waving character image.
 * Accepts a className prop so the parent controls
 * position, size, and animation per breakpoint.
 */
import chipperWave from '../../assets/home-image.png';

export default function HeroCharacter({ className = '' }) {
  return (
    <div className={`pointer-events-none ${className}`}>
      <img
        src={chipperWave}
        alt="Chipper character waving"
        className="w-full h-auto object-contain drop-shadow-xl"
        loading="eager"
        draggable="false"
      />
    </div>
  );
}
