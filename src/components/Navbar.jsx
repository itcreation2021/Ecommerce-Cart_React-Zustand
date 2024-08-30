import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useCartStore from "../store/useCartStore";


const Navbar = () => {

  const { carts } = useCartStore();


  const navItems = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Shop",
      link: "",
    },
    {
      id: 3,
      title: "About",
      link: "",
    },
    {
      id: 4,
      title: "Contact",
      link: "",
    },
  ];
  return (
    <div className=" border-b border-primary/30 fixed top-0 z-10 w-full bg-secondary">
      <MaxWidthWrapper>
        <nav className=" flex items-center justify-between">
          {/* Logo */}
          <div className="">
            <Link to={"/"}>
              {" "}
              <img src="Logo.png" alt="" className=" h-16" />
            </Link>
          </div>

          {/* Nav Items Seciton */}
          <div className=" space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className=" text-gray-300 hover:text-primary"
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Cart Seciton */}
          <div className=" space-x-4">
            <Link to={'/cart'}>
              <button className=" relative">
                <FaShoppingCart className=" text-2xl" />
                <span className=" absolute -top-3 -right-3 bg-primary text-white text-xs rounded-full w-5 h-5 flex justify-center items-center">
                 {carts.length}
                </span>
              </button>
            </Link>
          </div>
        </nav>
      </MaxWidthWrapper>
    </div>
  );
}

export default Navbar