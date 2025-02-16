
import { Link } from "react-router-dom";
import Header from "../components/Header"
import Landing_card from "../components/Landing_card";

function Landing () {
    return (
        <div className="bg-[#d6d5c4] min-h-screen">
            <Header />

            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center mt-15">
                <div className="flex gap-5">
                    <span className="text-4xl font-extrabold whitespace-nowrap">
                        Your Actions Matter!
                    </span>
                </div>

                {/* Hero Image Placeholder */}
                <div className="mt-6">
                    <img src="../../public/nature_illustration.png" alt="Nature Illustration" className="w-[700px] rounded-lg" />
                </div>
            </div>

            {/* Statistics Section */}
            <div className="flex flex-wrap justify-center gap-15 mb-10">
                <Link to="/stats" >
                    <Landing_card name="Stats"/>
                </Link>
                <Link to="/species" >
                    <Landing_card name="Species"/>
                </Link>
            </div>
        </div>
    )
}

export default Landing;
