import Header from "../components/Header";

function Volunteer() {
    return (
        <div className="bg-[#d6d5c4] min-h-screen flex flex-col items-center">
            <Header />

            {/* Page Title */}
            <h1 className="text-4xl font-bold text-[#4a4a3f] mt-10">Become a Conservation Volunteer</h1>
            <p className="text-lg text-[#6a6a5d] mt-2 text-center max-w-2xl">
                Join our volunteer program and take action to protect endangered species and habitats. 
                Every helping hand contributes to a better future for our planet!
            </p>

            {/* Volunteer Card */}
            <div className="bg-[#a8a793] p-8 mt-10 rounded-xl shadow-md max-w-2xl w-full text-center">
                <h2 className="text-2xl font-semibold text-[#4a4a3f]">Ways You Can Help</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-[#d6d5c4] p-5 rounded-lg shadow">
                        <h3 className="text-xl font-bold text-[#4a4a3f]">Wildlife Monitoring</h3>
                        <p className="text-[#6a6a5d] mt-2">Assist in tracking endangered species and collecting valuable conservation data.</p>
                    </div>

                    <div className="bg-[#d6d5c4] p-5 rounded-lg shadow">
                        <h3 className="text-xl font-bold text-[#4a4a3f]">Reforestation Projects</h3>
                        <p className="text-[#6a6a5d] mt-2">Help plant trees and restore natural habitats for wildlife.</p>
                    </div>

                    <div className="bg-[#d6d5c4] p-5 rounded-lg shadow">
                        <h3 className="text-xl font-bold text-[#4a4a3f]">Community Education</h3>
                        <p className="text-[#6a6a5d] mt-2">Spread awareness and educate communities on conservation efforts.</p>
                    </div>

                    <div className="bg-[#d6d5c4] p-5 rounded-lg shadow">
                        <h3 className="text-xl font-bold text-[#4a4a3f]">Beach & Forest Cleanups</h3>
                        <p className="text-[#6a6a5d] mt-2">Join clean-up initiatives to reduce pollution and protect ecosystems.</p>
                    </div>
                </div>

                {/* Volunteer Sign-Up Button */}
                <button className="mt-8 px-8 py-3 bg-[#4a4a3f] text-white font-bold rounded-lg shadow-md hover:bg-[#3a3a2f]">
                    Sign Up to Volunteer
                </button>
            </div>

            {/* Footer */}
            <p className="mt-8 text-sm text-[#6a6a5d]">
                Thank you for your interest in protecting our planet! 🌱
            </p>
        </div>
    );
}

export default Volunteer;
