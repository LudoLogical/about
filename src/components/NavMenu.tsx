import React from 'react';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';
import { handleScroll } from '~/utils/smoothScroller';

type NavigationProps = {
  menuStyles: string;
  resumeStyles: string;
  onMovementAction?: () => void;
};

const Navigation: React.FC<NavigationProps> = ({
  menuStyles,
  resumeStyles,
  onMovementAction
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    handleScroll(e);
    if (onMovementAction) {
      onMovementAction();
    }
  };
  return (
    <nav>
      <menu className={'menu gap-x-1 px-1 ' + menuStyles}>
        <li>
          <Link href="#about" onClick={handleClick}>
            About
          </Link>
        </li>
        <li>
          <Link href="#skills" onClick={handleClick}>
            Skills
          </Link>
        </li>
        <li>
          <Link href="#work" onClick={handleClick}>
            Work
          </Link>
        </li>
        <li>
          <Link href="#music" onClick={handleClick}>
            Music
          </Link>
        </li>
        <li>
          <Link href="#contact" onClick={handleClick}>
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="Resume.pdf"
            className={
              'btn-outline btn-primary btn gap-2 text-base ' + resumeStyles
            }
          >
            Resume
            <FiExternalLink className="h-4 w-4" />
          </Link>
        </li>
      </menu>
    </nav>
  );
};

export default Navigation;
