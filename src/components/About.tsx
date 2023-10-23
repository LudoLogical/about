import React from 'react';
import Link from 'next/link';
import { handleScroll } from '~/utils/smoothScroller';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="mx-4 flex w-full max-w-2xl flex-col items-center justify-center py-20"
    >
      <h2 className="divider mb-6 text-3xl font-bold">About</h2>
      <p>
        Hi! I&apos;m Ludo and I enjoy making things that end up on your computer
        screen. I learned the basics of HTML in 2015 and was instantly hooked.
        Since then, I&apos;ve done a lot with the web in both front end and back
        end roles. My front end experience includes an internship with{' '}
        <Link href="https://onfleet.com/" className="btn-link">
          Onfleet
        </Link>{' '}
        and work on an account management platform for the{' '}
        <Link href="https://www.utdallas.edu/" className="btn-link">
          UT Dallas
        </Link>{' '}
        student organization{' '}
        <Link href="https://www.utdnebula.com/" className="btn-link">
          Nebula Labs
        </Link>
        . I think this website also counts! Regarding back end, I learned most
        of what I know thanks to an internship with{' '}
        <Link href="https://www.cvent.com/" className="btn-link">
          Cvent
        </Link>{' '}
        and my many, many side projects.
        <br />
        <br />
        My interest in technology goes beyond just web applications, though.
        I&apos;m also fascinated by artificial intelligence - especially natural
        language processing - and apps for desktop and mobile. Learning more
        about these things is high on my priority list!
        <br />
        <br />
        When I&apos;m not creating software, I like to write and arrange music,
        especially for a cappella chorus. You can{' '}
        <Link href="#music" onClick={handleScroll} className="btn-link">
          check out some of my compositions
        </Link>{' '}
        below if you&apos;d like! I&apos;m also a big fan of games and enjoy
        thinking critically about them. In fact, I hope to start a blog about
        critiquing and studying games soon!
      </p>
    </section>
  );
};

export default About;
