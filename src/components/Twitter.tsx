/** @format */
'use client';

import type { FC } from 'react';
import { Timeline } from 'react-twitter-widgets';

const Twitter: FC = () => {
  return (
    <div className="mt-20">
      <section className="mx-auto max-w-2xl px-2">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 border-b border-gray-200 pb-2 mb-6">
          X (Twitter)
        </h2>
        <p className="mb-6 text-gray-700">
          Tweets by{' '}
          <a
            href="https://twitter.com/PJ_RiPPro"
            className="font-medium text-blue-700 hover:text-blue-900 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            @PJ_RiPPro
          </a>
        </p>
        <div className="overflow-hidden border border-gray-200 bg-white">
          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'PJ_RiPPro'
            }}
            options={{
              width: '100%',
              height: '600',
              theme: 'light',
              chrome: 'nofooternoheader'
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default Twitter;
