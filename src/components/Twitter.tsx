/** @format */

import type { FC } from 'react';
import { Timeline } from 'react-twitter-widgets';

const sectionStyle = {
  marginLeft: '8px',
  padding: '2px',
  fontSize: '11pt'
};

const Header: FC = () => {
  return (
    <div style={sectionStyle}>
      <h2>Twitter</h2>
      Tweets by{' '}
      <a href="https://twitter.com/PJ_RiPPro" target="_blank" rel="noopener noreferrer">
        @PJ_RiPPro
      </a>
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'PJ_RiPPro'
        }}
        options={{
          width: '600',
          height: '600',
          theme: 'dark',
          chrome: 'nofooternoheader'
        }}
      />
    </div>
  );
};

export default Header;
