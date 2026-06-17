function SocialTelegram() {
  return (
    <a href="#" aria-label="Telegram" className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center neo-shadow-sm hover:scale-105 active:scale-95 transition-transform">
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.24-5.54 3.65-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.35-.49.97-.74 3.79-1.65 6.32-2.73 7.57-3.25 3.61-1.48 4.36-1.74 4.85-1.75.11 0 .35.03.5.16.13.12.17.29.19.41z"/>
      </svg>
    </a>
  );
}

function SocialChart() {
  return (
    <a href="#" aria-label="Chart" className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center neo-shadow-sm hover:scale-105 active:scale-95 transition-transform">
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    </a>
  );
}

function SocialX() {
  return (
    <a href="#" aria-label="X (Twitter)" className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center neo-shadow-sm hover:scale-105 active:scale-95 transition-transform">
      <svg className="w-4 h-4 md:w-5 md:h-5 text-black fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    </a>
  );
}

export default function SocialLinks() {
  return (
    <div className="flex gap-4 items-center justify-center pb-2">
      <SocialTelegram />
      <SocialChart />
      <SocialX />
    </div>
  );
}