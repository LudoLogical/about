import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import headshotRectangle from 'public/headshots/rectangle.jpg';
import headshotSquare from 'public/headshots/square.jpg';
import { handleScroll } from '~/utils/smoothScroller';

const Hero: React.FC = () => {
  return (
    <section className="flex min-h-screen flex-col py-32">
      <div className="hero flex-1">
        <div className="hero-content box-border w-full flex-col justify-evenly lg:flex-row">
          <div className="avatar hidden w-80 lg:block">
            <Image
              src={headshotRectangle}
              alt="A picture of Daniel in a suit against a plain background."
              priority={true}
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div>
            <p className="mb-4 text-base">Hello, my name is</p>
            <h1 className="mb-0.5 text-2xl font-bold text-primary xxs:mb-1 xxs:text-3xl xs:mb-2 xs:text-4xl md:text-5xl">
              <span className="whitespace-nowrap">Daniel &quot;Ludo&quot;</span>{' '}
              <span className="whitespace-nowrap">
                DeAnda.
                <span className="badge badge-secondary badge-sm align-top xs:badge-md">
                  Any/All
                </span>
              </span>
            </h1>
            <h1 className="text-2xl font-bold xxs:text-3xl xs:text-4xl md:text-5xl">
              I build web applications.
            </h1>
            <p className="max-w-xl py-6">
              I&apos;m a software engineer and a problem solver. I just
              graduated from the University of Texas at Dallas with major,
              university, and highest Latin honors. Currently, I&apos;m looking
              for a place in the software-as-a-service space.
            </p>
            <div className="flex flex-col items-start justify-center gap-4 xxs:flex-row xxs:items-center xxs:justify-start">
              <div className="avatar w-12 min-w-[3rem] max-w-none xxs:w-20 lg:hidden">
                <Image
                  src={headshotSquare}
                  alt="A picture of Daniel in a suit against a plain background."
                  className="rounded-full shadow-2xl"
                />
              </div>
              <Link href="#contact" onClick={handleScroll}>
                <button className="btn-primary btn lg:ml-0">
                  Let&apos;s chat!
                </button>
              </Link>
              <div className="flex flex-row gap-x-4">
                <Link href="https://github.com/LudoLogical">
                  <button className="btn-outline btn-square btn">
                    <FiGithub className="h-4 w-4" />
                  </button>
                </Link>
                <Link href="https://www.linkedin.com/in/danielchristiandeanda/">
                  <button className="btn-outline btn-square btn">
                    <FiLinkedin className="h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
