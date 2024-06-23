// pages/home.tsx
"use client";
import React, { useState, FC } from 'react';
import { views } from './components/views';
import Header from './components/header';

const Home: FC = () => {
  const [view, setView] = useState<number>(0);
  const CurrentView = views[view];

  return (
    <main className="flex min-h-screen flex-col">
      <div className="overlay"></div>
      <div className="scanline"></div>
      <div className="wrapper">
        <div className="content clearfix">
          <Header view={view} setView={setView} />
          <CurrentView view={view} setView={setView} />
        </div>
      </div>
    </main>
  );
};

export default Home;
