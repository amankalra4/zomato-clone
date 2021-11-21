/* eslint-disable jsx-a11y/control-has-associated-label */
import type { NextPage } from 'next';
import React from 'react';
import App from '@src/components/app';
import OgMetaCombo from '@src/components/og-meta-combo';

const Home: NextPage = () => {
  return (
    <App>
      <OgMetaCombo title="Zomato" description="Zomato" />
    </App>
  );
};

export default Home;
