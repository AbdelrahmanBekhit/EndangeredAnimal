import { Link } from "react-router-dom"

function Header(){
    return(
        <header className="top-0 right-0 left-0 w-full bg-[#d6d5c4] p-5 flex justify-between border-b-4 border-gray-200 bg-opacity-70 text-black">
            <h1 className="text-4xl font-extrabold">Protect Our Planet</h1 >
            <div className="flex flex-row items-center gap-10 text-2xl font-bold ">
                <Link className=" hover:text-3xl bg-[#a5a59c] px-6 rounded-2xl " to="/map">Map</Link>
                <Link className="hover:text-stone-500 hover:text-3xl" to="/voulenteer">Voulenteer</Link>
                <Link className="hover:text-stone-500 hover:text-3xl" to="/donate">Donate</Link>
            </div>
        </header>
    )
}

export default Header