import React from 'react';
import Hero from './Hero';
import AboutSection from './AboutSection';
import Featured from './Featured';
import GetInTouch from './GetInTouch';

const Home = () => {
  return (
    <div className='Home'>
      <main className='home__main-content'>
        <Hero />
        <AboutSection />
        <Featured />
        <GetInTouch />
      </main>
    </div>
  )
}

export default Home
