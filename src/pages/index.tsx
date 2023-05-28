import React from 'react';
import { type NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
const Header = dynamic(() => import('~/components/Header'), { ssr: false });
import Hero from '~/components/Hero';
import About from '~/components/About';
import Skills from '~/components/Skills';
import Work from '~/components/Work';
import Music from '~/components/Music';
import Contact from '~/components/Contact';
import Footer from '~/components/Footer';

const Home: NextPage = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <Head>
        <title>Daniel &quot;Ludo&quot; DeAnda</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="top" />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main
        className={`transition-all ${
          menuOpen
            ? 'pointer-events-none blur-sm'
            : 'pointer-events-auto blur-none'
        }`}
      >
        <Hero />
        <div className="mx-4 flex flex-col items-center justify-center">
          <About />
          <Skills />
          <Work />
          <Music />
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
