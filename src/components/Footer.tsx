import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer footer-center bg-base-300 p-4 text-base-content">
      <div>
        <p>
          © 2023
          <br />
          Created with &#9825; by Daniel &quot;Ludo&quot; DeAnda
          <br />
          Built using Next.js, Tailwind CSS, Daisy UI, and{' '}
          <code>react-icons</code>
          <br />
          View the source code on{' '}
          <Link
            href="https://github.com/LudoLogical/personal-website-v3"
            className="btn-link"
          >
            GitHub
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
