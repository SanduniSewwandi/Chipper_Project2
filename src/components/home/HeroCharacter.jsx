import chipperWave from '../../assets/home-image.png';

export default function HeroCharacter({ className = '', style = {} }) {
  return (
    <div className={`pointer-events-none ${className}`} style={style}>
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