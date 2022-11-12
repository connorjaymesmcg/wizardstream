import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';

import { logo } from '../assets';
import { links } from '../assets/constants';

const NavLinks = () => (
  <div className="mt-10">
    {links.map((link) => (
      <NavLink
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        key={link.name}
        to={link.to}
        onClick={() => handleClick && handleClick()}
      >
        <link.icon className="w-6 h-6 mr-2" />
        {link.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpeen, setMobileMenuOpeen] = useState(false);

  return (
    <div className="md:flex hidden flex-col w-[240px] py-10 px-3 bg-[#191624]">
      <img src={logo} alt="logo" className="w-full h-14 object-contain" />
      <NavLinks></NavLinks>
    </div>
  );
};

export default Sidebar;
