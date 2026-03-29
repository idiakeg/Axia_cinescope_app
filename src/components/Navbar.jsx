import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    return (
        <nav className="fixed top-0 left-0 z-50 w-full bg-grass">
            <div className="container mx-auto w-[95%] md:w-[90%] max-w-[1240px] nav_container flex justify-between items-center py-4 relative">
                <Link
                    to={"/"}
                    className="logo text-cream font-Comic text-[20px] md:text-[24px] uppercase tracking-wider font-extrabold hover:scale-105 transition duration-200"
                >
                    Cinescope
                </Link>
                {/* search bar */}
                <div className="search_bar hidden lg:flex border border-green-300 w-[50%] rounded-[20px] overflow-hidden  items-stretch cursor-pointer">
                    <input
                        type="text"
                        placeholder="Search for movies..."
                        className="w-[85%] py-[10px] px-[10px] bg-transparent placeholder-white outline-none text-white"
                    />
                    <div className="text-xl flex-1 flex items-center justify-center bg-[#EAB308] border border-none text-[#198754]">
                        <i className="ri-search-line"></i>
                    </div>
                </div>
                {/* favorites */}
                <div className="favorites hidden lg:block text-white text-[30px] font-thin relative">
                    <i className="ri-heart-line cursor-pointer"></i>
                    <span className="text-[10px] font-medium bg-red-400 absolute top-[3px] -left-[-20px] w-[10px] h-[10px] flex items-center justify-center p-2 rounded-[50%] cursor-pointer">
                        1
                    </span>
                </div>
                {/* hamburger menu */}
                <div
                    onClick={() => setMenu((prev) => !prev)}
                    className="hamburger lg:hidden text-cream"
                >
                    {menu ? (
                        <i className="ri-close-line text-3xl cursor-pointer"></i>
                    ) : (
                        <i className="ri-menu-line text-3xl cursor-pointer"></i>
                    )}
                </div>

                {/* search and favorites on small screens */}
                {menu && (
                    <>
                        <div className="lg:hidden absolute top-[100%] w-[100%] bg-blue-400 flex justify-between py-5 px-3 rounded-b-md items-center">
                            <div className="search_bar border w-[90%] rounded-[20px] overflow-hidden flex items-stretch cursor-pointer">
                                <input
                                    type="text"
                                    placeholder="Search for movies..."
                                    className="w-[85%] py-[5px] px-[10px] md:p-[10px] bg-transparent placeholder-white outline-none text-white"
                                />
                                <div className="text-xl flex-1 flex items-center justify-center bg-[#EAB308] border border-none text-[#198754]">
                                    <i className="ri-search-line"></i>
                                </div>
                            </div>
                            <div className="favorites text-white text-[25px] md:text-[30px] font-thin relative">
                                <i className="ri-heart-line cursor-pointer"></i>
                                <span className="text-[8px] p-[7px] md:text-[10px] font-medium bg-red-400 absolute top-[3px] -left-[-15px] md:-left-[-20px] w-[10px] h-[10px] flex items-center justify-center md:p-2 rounded-[50%] cursor-pointer">
                                    1
                                </span>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
