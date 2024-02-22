import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-between p-2 bg-slate-400 py-2">
      {/* Logo on the left */}
      <Link href="/">Logo</Link>

      <div className="flex flex-col items-end ">
        {/* Burger menu for small screens */}
        <div className="md:hidden ">
          <button onClick={toggleMenu}> ☰ </button>
        </div>

        {/* Search bar and buttons on the right */}
        <div
          className={`flex flex-col items-end md:space-x-5 ${
            menuOpen ? "block" : "hidden"
          } md:flex-row`}
        >
          <div className="flex ">
            <input type="text" placeholder="Search" className="w-1/2" />
            <button className="">Search</button>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col sm:flex-row md:space-x-2">
            <Link href="/">Home</Link>
            <Link href="/category" className="">
              <button className="">Categories</button>
            </Link>
            <Link href="/auth/login">Login</Link>
            <Link href="/auth/register">Register</Link>
            <Link href="/liked">Liked</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
