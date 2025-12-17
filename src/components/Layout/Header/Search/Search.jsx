import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const Search = ({ isSearchBarOpen, toggleSearchbar }) => {

    return (
        <>
            <div className={`search fixed inset-x-0 top-0 border border-slate-400 shadow-sm shadow-[#ccc] py-2 md:py-[0.7rem] lg:py-[0.9rem] xl:py-[1rem] px-2 bg-slate-800 transition-all duration-500 z-30 ${isSearchBarOpen ? "opened" : ""}`}>
                <div className="search__inner">
                    {/* Mobile Search */}
                    <div className="search__mobile">
                        <div className="search__group relative">
                            <input type="search" id='search' name='search' placeholder='search here...' className='search-input w-full border border-[#ccc] py-1 px-2 placeholder:capitalize tracking-wide text-[0.9rem] xl:text-[1.1rem] focus:outline-0 rounded-[4px]' />
                            <div className="search__icon-block absolute top-[0.4rem] right-[0.7rem]">
                                <HiOutlineMagnifyingGlass className="cta-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                isSearchBarOpen && (
                    <div className="fixed z-20 inset-0 bg-black/40" onClick={toggleSearchbar}></div>
                )
            }
        </>
    )
}

export default Search