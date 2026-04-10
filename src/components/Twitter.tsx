/** @format */

import type { FC } from 'react';
import { Timeline } from 'react-twitter-widgets';

const Twitter: FC = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-3xl">Twitter</h2>
      <p className="[font-family:var(--font-mono)] text-xs uppercase tracking-[0.16em] text-rippro-dark/70">
        Tweets by{' '}
        <a href="https://twitter.com/PJ_RiPPro" target="_blank" rel="noopener noreferrer">
          @PJ_RiPPro
        </a>
      </p>
      <div className="overflow-hidden rounded-[20px] border border-rippro-dark/15 bg-white/90 p-2 shadow-[0_18px_35px_-28px_rgba(41,72,127,0.9)]">
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'PJ_RiPPro'
          }}
          options={{
            width: '100%',
            height: '640',
            theme: 'light',
            chrome: 'nofooter'
          }}
        />
      </div>
    </section>
  );
};

export default Twitter;
