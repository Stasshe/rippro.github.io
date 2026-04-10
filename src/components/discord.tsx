import { useEffect } from 'react';

function Discord() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="mx-auto flex max-w-2xl justify-center overflow-hidden rounded-[18px] border border-rippro-dark/15 bg-white/90 p-4">
      <blockquote className="twitter-tweet !m-0">
        <p lang="ja" dir="ltr">
          RiPProの新歓用Discordサーバー公開します！ 講演会や入団に興味のある方は、自由に参加できます。
          質問も受け付けてるので、ぜひご活用ください！
          <a href="https://discord.gg/WpXDMNGbez">https://discord.gg/WpXDMNGbez</a>
        </p>
        &mdash; RiPPro (@PJ_RiPPro) <a href="https://x.com/PJ_RiPPro/status/1907408404735545444">April 2, 2025</a>
      </blockquote>
    </div>
  );
}

export default Discord;
