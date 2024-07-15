import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import navIcon1 from '../assets/nav-icon1.svg';
import navIcon2 from '../assets/nav-icon2.svg';
import navIcon3 from '../assets/nav-icon3.svg';
import navIcon4 from '../assets/nav-icon4.svg';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const width = window.innerWidth;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Kartik&nbsp;Agrawal&nbsp;
            <span className='sm:block hidden'>&nbsp;|&nbsp;&nbsp;Portfolio</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center order-2 sm:order-1'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}

              <li className="flex justify-between items-center">
                <a href="https://www.linkedin.com/in/kartik-agrawal-913025189/" className="me-6" target="_blank" rel="noreferrer"><img src={navIcon1} alt="linkedIn" /></a>
                <a href="https://www.instagram.com/kartik.mital/" className="me-6" target="_blank" rel="noreferrer"><img src={navIcon3} alt="instagram" /></a>
              </li>

              <li className="flex justify-between items-center">
                <a href="https://www.facebook.com/kartik.mital.9/" className="me-6" target="_blank" rel="noreferrer"><img src={navIcon2} alt="facebook" /></a>
                <a href={`${width < 640 ? "https://wa.me/8740954615" : "https://web.whatsapp.com/send?phone=8740954615&text=Hi"}`} target="_blank" rel="noreferrer"><img src={navIcon4} alt="facebook" /></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="sm:flex hidden justify-between items-center order-1 sm:order-2">
          <a href="https://www.linkedin.com/in/kartik-agrawal-913025189/" className="me-6" target="_blank" rel="noreferrer"><img src={navIcon1} alt="linkedIn" /></a>
          <a href="https://www.instagram.com/kartik.mital/" className="me-6" target="_blank" rel="noreferrer"><img src={navIcon3} alt="instagram" /></a>
          <a href="https://www.facebook.com/kartik.mital.9/" className="me-6" target="_blank" rel="noreferrer"><img src={navIcon2} alt="facebook" /></a>
          <a href={`${width < 640 ? "https://wa.me/8740954615&text=Hi" : "https://web.whatsapp.com/send?phone=8740954615&text=Hi"}`} target="_blank" rel="noreferrer"><img src={navIcon4} alt="facebook" /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;