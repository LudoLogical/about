import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import useDetectScroll from '@smakss/react-scroll-direction';
import NavMenu from './NavMenu';
import { handleScroll } from '~/utils/smoothScroller';
import emblem from 'public/emblems/emblem_yellow.png';

const MD_BREAKPOINT_IN_PIXELS = 768;

type HeaderProps = {
  menuOpen: boolean;
  setMenuOpen: (newValue: boolean) => void;
};

const Header: React.FC<HeaderProps> = ({ menuOpen, setMenuOpen }) => {
  const [atTop, setAtTop] = React.useState(true);
  const handleSetMenuOpen = React.useCallback(
    (newValue: boolean) => {
      document.body.style.overflow = newValue ? 'hidden' : 'auto';
      document.body.style.paddingRight = newValue
        ? `${window.innerWidth - document.documentElement.clientWidth}px`
        : '0px';
      setMenuOpen(newValue);
    },
    [setMenuOpen]
  );
  React.useEffect(() => {
    if (window.scrollY > 0) {
      setAtTop(false);
    }
    window.addEventListener('scroll', () => {
      setAtTop(window.scrollY === 0);
    });
  }, []);
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MD_BREAKPOINT_IN_PIXELS && menuOpen) {
        handleSetMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen, handleSetMenuOpen]);
  const scrollDir = useDetectScroll({});
  return (
    <>
      <header
        className={`navbar fixed left-0 top-0 z-10 min-h-[8rem] min-w-[14rem] flex-none px-8 transition duration-300 ${
          atTop ? '' : 'bg-base-300/90 drop-shadow-2xl backdrop-blur-sm'
        } ${
          atTop || scrollDir === 'up' ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex-1">
          <Link
            href="#top"
            onClick={(e) => {
              handleScroll(e);
              handleSetMenuOpen(false);
            }}
            className="btn-ghost btn h-16 text-xl normal-case md:h-20"
          >
            <Image
              src={emblem}
              alt="Daniel's personal emblem. It consists of several lines, a backwards 'L', and a 'D'. Together, these form an iconographic representation of a bullet in flight."
              className="w-12 md:w-16"
            />
          </Link>
        </div>
        <NavMenu
          menuStyles="flex-none menu-horizontal hidden md:inline-flex"
          resumeStyles="ml-2 mr-4"
        />
        <aside
          className={`fixed right-0 top-0 z-30 h-screen w-screen bg-base-200 transition-transform xxs:w-72 md:hidden ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-full w-full items-center justify-center">
            <NavMenu
              menuStyles="menu-vertical items-center"
              resumeStyles="mt-2 w-fit"
              onMovementAction={() => handleSetMenuOpen(false)}
            />
          </div>
        </aside>
        <label
          className="swap-rotate swap btn-ghost btn-circle btn pointer-events-auto fixed right-8 top-10 z-50 mr-2 md:hidden"
          onClick={(e) => {
            e.preventDefault();
            handleSetMenuOpen(!menuOpen);
          }}
        >
          <input type="checkbox" checked={menuOpen} readOnly />
          <FiMenu className="swap-off h-8 w-8 fill-current" />
          <FiX className="swap-on h-8 w-8 fill-current" />
        </label>
      </header>
      <div
        className={`${
          menuOpen ? 'fixed' : 'hidden'
        } left-0 top-0 h-screen w-screen bg-black opacity-50`}
        onClick={(e) => {
          e.preventDefault();
          handleSetMenuOpen(false);
        }}
      />
    </>
  );
};

export default Header;
