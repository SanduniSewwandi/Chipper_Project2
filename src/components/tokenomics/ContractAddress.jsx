import { useState } from 'react';
import copyIcon from '../../assets/Copy.png';

const CONTRACT_ADDRESS = "0x71297312753EA7A72570a5a3278eD";

export default function ContractAddress() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Mobile */}
      <div className="md:hidden absolute z-20 top-[52%] left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-2 bg-white border-[3px] border-black rounded-full px-4 py-2 neo-shadow whitespace-nowrap">
          <span className="font-mono font-black text-black tracking-wide text-[11px] truncate max-w-[220px]">
            {CONTRACT_ADDRESS}
          </span>
          <button
            onClick={handleCopy}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors active:scale-95 flex items-center justify-center shrink-0"
            aria-label="Copy contract address"
          >
            {copied
              ? <span className="text-green-600 font-bold text-[10px]">Copied!</span>
              : <img src={copyIcon} alt="Copy" className="w-4 h-4 object-contain" draggable="false" />
            }
          </button>
        </div>
      </div>

      {/* Desktop */}
      <div
        className="hidden md:flex absolute right-12 z-20 items-center gap-4 bg-white border-4 border-black rounded-2xl px-5 py-3 neo-shadow"
        style={{ bottom: '55%', maxWidth: 'clamp(130px, 38vw, 520px)' }}
      >
        <span
          className="font-mono font-black text-black tracking-wide select-all truncate"
          style={{ fontSize: 'clamp(7px, 1.3vw, 16px)' }}
        >
          {CONTRACT_ADDRESS}
        </span>
        <button
          onClick={handleCopy}
          className="p-1 hover:bg-gray-100 rounded transition-colors active:scale-95 flex items-center justify-center shrink-0"
          aria-label="Copy contract address"
        >
          {copied
            ? <span style={{ fontSize: 'clamp(7px, 1.1vw, 13px)' }} className="text-green-600 font-bold whitespace-nowrap">Copied!</span>
            : <img src={copyIcon} alt="Copy" style={{ width: 'clamp(12px, 2vw, 24px)', height: 'clamp(12px, 2vw, 24px)' }} className="object-contain" draggable="false" />
          }
        </button>
      </div>
    </>
  );
}