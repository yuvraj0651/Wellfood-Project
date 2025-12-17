import { useState } from "react";
import HeaderLogo from "../../../assets/header/header-logo.png";
import Search from "./Search/Search";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { FaBagShopping } from "react-icons/fa6";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router";

const Header = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSearchBarOpen, setIsSearchbarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    };

    const toggleSearchbar = () => {
        setIsSearchbarOpen(!isSearchBarOpen)
    };

    return (
        <>
            <header>
                <div className="header header__common__layout bg-slate-900 text-white py-[0.6rem] md:py-[0.8rem] lg:py-[1rem] xl:py-[1.4rem] px-3 fixed inset-x-0 w-full z-40">
                    <div className="header__inner flex items-center justify-between">
                        {/* Header Logo */}
                        <div className="header__logo w-[7.5rem]">
                            <img src={HeaderLogo} alt="header-logo" className='w-full h-auto' />
                        </div>
                        {/* Header Navigation */}
                        <nav className={`header__navigation-block absolute top-[3.1rem] md:top-[3.6rem] left-[-20rem] lg:static lg:w-auto lg:h-auto header__common__layout bg-slate-100 lg:bg-slate-900 lg:border-none lg:shadow-none w-[20rem] h-screen py-2 lg:py-0 text-black transition-all duration-500 ${isSidebarOpen ? "opened" : ""}`}>
                            <ul className="header__navigation nav-link lg:flex lg:items-center">
                                <li className="header__nav-item">
                                    <Link to="/">home</Link>
                                </li>
                                <li className="header__nav-item">
                                    <a href="/">pages</a>
                                </li>
                                <li className="header__nav-item">
                                    <a href="/">blog</a>
                                </li>
                                <li className="header__nav-item">
                                    <a href="/">shop</a>
                                </li>
                                <li className="header__nav-item">
                                    <a href="/">contact</a>
                                </li>
                                <li className="header__nav-item">
                                    <Link to="/login">login</Link>
                                </li>
                            </ul>
                            <div className="header__nav-close absolute top-3 right-4" onClick={toggleSidebar}>
                                <IoMdClose className="cta-icon text-slate-800" />
                            </div>
                        </nav>
                        {/* Header Cta */}
                        <div className="header__cta flex items-center gap-[0.7rem]">
                            <div className="header__search" onClick={toggleSearchbar}>
                                <HiOutlineMagnifyingGlass className="cta-icon" />
                            </div>
                            <div className="header__cart">
                                <FaBagShopping className="cta-icon" />
                            </div>
                            <div className="header__hamburger lg:hidden" onClick={toggleSidebar}>
                                <HiBars3BottomRight className="cta-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Search
                isSearchBarOpen={isSearchBarOpen}
                toggleSearchbar={toggleSearchbar}
            />
            {
                isSidebarOpen && (
                    <div className="fixed inset-0 bg-black/40 z-20 lg:hidden" onClick={toggleSidebar}></div>
                )
            }
        </>
    )
}

export default Header