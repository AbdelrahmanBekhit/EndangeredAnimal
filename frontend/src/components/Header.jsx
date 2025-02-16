// // import { Link } from "react-router-dom"

// // function Header(){
// //     return(
// //         <header className="top-0 right-0 left-0 w-full bg-[#d6d5c4] p-5 flex justify-between border-b-4 border-gray-200 bg-opacity-70 text-black">
// //             <h1 className="text-4xl font-extrabold">Protect Our Planet</h1 >
// //             <div className="flex flex-row items-center gap-10 text-2xl font-bold ">
// //                 <Link className="hover:text-stone-500 hover:text-3xl" to="/">Home</Link>
// //                 <Link className="hover:text-stone-500 hover:text-3xl" to="/map">Map</Link>
// //                 <Link className="hover:text-stone-500 hover:text-3xl" to="/volunteer">Voulenteer</Link>
// //                 <Link className="hover:text-stone-500 hover:text-3xl" to="/donate">Donate</Link>
// //             </div>
// //         </header>
// //     )
// // }


import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation(); // Get current page path

    return (
        <header className="top-0 right-0 left-0 w-full bg-[#d6d5c4] p-5 flex justify-between items-center border-b-4 border-gray-200 bg-opacity-70 text-black">
            <h1 className="text-4xl font-extrabold whitespace-nowrap">Protect Our Planet</h1>
            <div className="flex flex-row items-center gap-10 text-2xl font-bold">
                <div className="w-24 text-center">
                    <Link
                        className={`transition-transform hover:scale-110 ${
                            location.pathname === "/" ? "text-[#4a4a3f] text-3xl" : ""
                        }`}
                        to="/"
                    >
                        Home
                    </Link>
                </div>
                <div className="w-24 text-center">
                    <Link
                        className={`transition-transform hover:scale-110 ${
                            location.pathname === "/map" ? "text-[#4a4a3f] text-3xl" : ""
                        }`}
                        to="/map"
                    >
                        Map
                    </Link>
                </div>
                <div className="w-24 text-center">
                    <Link
                        className={`transition-transform hover:scale-110 ${
                            location.pathname === "/volunteer" ? "text-[#4a4a3f] text-3xl" : ""
                        }`}
                        to="/volunteer"
                    >
                        Volunteer
                    </Link>
                </div>
                <div className="w-24 text-center">
                    <Link
                        className={`transition-transform hover:scale-110 ${
                            location.pathname === "/donate" ? "text-[#4a4a3f] text-3xl" : ""
                        }`}
                        to="/donate"
                    >
                        Donate
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
