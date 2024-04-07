
import Link from "next/link";
import { useState } from "react";

const NavLink = ({ href, title, submenu }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <a
        href={href}
        className="text-white hover:text-gray-300 px-3 py-2 rounded-md transition duration-300 ease-in-out"
        onClick={submenu ? toggleDropdown : undefined}
      >
        {title}
      </a>
      {submenu && isDropdownOpen && (
        <div className="absolute z-10 mt-2 bg-gray-800 rounded-md shadow-lg">
          {submenu.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavLink;

