
import Header from "../components/Header"
import Landing_card from "../components/Landing_card";

function Landing () {
    return (
        <div className="bg-[#d6d5c4] min-h-screen">
            <Header />

            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center mt-15">
                <div className="flex gap-5">
                    <span className="px-10 py-4 text-xl font-bold bg-[#a8a793] rounded-2xl shadow-md">
                        Protect Our Planet
                    </span>
                    <span className="px-10 py-4 text-xl font-bold bg-[#a8a793] rounded-2xl shadow-md">
                        Your Actions Matter
                    </span>
                </div>

                {/* Hero Image Placeholder */}
                <div className="mt-6">
                    <img src="../../public/nature_illustration.png" alt="Nature Illustration" className="w-[700px] rounded-lg" />
                </div>
            </div>

            {/* Statistics Section */}
            <div className="flex justify-center gap-10 -mt-15">
                <Landing_card name="Planet"/>
                <Landing_card name="Stats"/>
                <Landing_card name="Species"/>

            </div>
        </div>
    )
}

export default Landing;