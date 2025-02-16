
import { useState } from "react";
import Header from "../components/Header";

function Volunteer() {
    const [showFormPopup, setShowFormPopup] = useState(false);
    const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        age: "",
        email: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const resetForm = () => {
        setFormData({
            firstName: "",
            lastName: "",
            age: "",
            email: "",
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Age validation (must be between 18 and 65)
        const age = parseInt(formData.age, 10);
        if (!formData.firstName || !formData.lastName || !formData.age || !formData.email) {
            alert("Please fill in all fields.");
            return;
        } else if (isNaN(age) || age < 18 || age > 65) {
            alert("Age must be between 18 and 65.");
            return;
        }

        resetForm();
        setShowFormPopup(false);
        setShowConfirmationPopup(true);
    };

    const handleCloseForm = () => {
        resetForm();
        setShowFormPopup(false);
    };

    return (
        <div className={`bg-[#d6d5c4] min-h-screen flex flex-col items-center ${showFormPopup || showConfirmationPopup ? "overflow-hidden" : ""}`}>
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
                <button 
                    className="mt-8 px-8 py-3 bg-[#4a4a3f] text-white font-bold rounded-lg shadow-md hover:bg-[#3a3a2f]"
                    onClick={() => setShowFormPopup(true)}
                >
                    Sign Up to Volunteer
                </button>
            </div>

            {/* Pop-up Form (Lowered Position & Reset on Close) */}
            {showFormPopup && (
                <div className="absolute top-20 left-0 w-full h-full flex items-center justify-center bg-[#d6d5c4] bg-opacity-90">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md relative">
                        {/* Close Button */}
                        <button 
                            className="absolute top-3 right-3 text-[#6a6a5d] font-bold text-lg hover:text-[#3a3a2f]" 
                            onClick={handleCloseForm}
                        >
                            ✖
                        </button>
                        <h2 className="text-2xl font-bold text-[#4a4a3f]">Volunteer Sign-Up</h2>
                        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
                            <input 
                                type="text" 
                                name="firstName" 
                                value={formData.firstName} 
                                onChange={handleChange} 
                                placeholder="First Name" 
                                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4a4a3f]"
                                required
                            />
                            <input 
                                type="text" 
                                name="lastName" 
                                value={formData.lastName} 
                                onChange={handleChange} 
                                placeholder="Last Name" 
                                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4a4a3f]"
                                required
                            />
                            <input 
                                type="number" 
                                name="age" 
                                value={formData.age} 
                                onChange={handleChange} 
                                placeholder="Age (18-65)" 
                                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4a4a3f] appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                                required
                            />
                            <input 
                                type="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                placeholder="Email" 
                                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4a4a3f]"
                                required
                            />
                            <button 
                                type="submit" 
                                className="mt-4 px-6 py-2 bg-[#6a6a5d] text-white rounded-lg shadow-md hover:bg-[#4a4a3f]"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Confirmation Pop-up */}
            {showConfirmationPopup && (
                <div className="absolute top-20 left-0 w-full h-full flex items-center justify-center bg-[#d6d5c4] bg-opacity-90">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
                        <h2 className="text-2xl font-bold text-[#4a4a3f]">Thank You! 🌱</h2>
                        <p className="text-[#6a6a5d] mt-2">
                            We will shortly send you an email.
                        </p>
                        <button 
                            className="mt-4 px-6 py-2 bg-[#6a6a5d] text-white rounded-lg shadow-md hover:bg-[#4a4a3f]"
                            onClick={() => setShowConfirmationPopup(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Footer */}
            <p className="mt-8 text-sm text-[#6a6a5d]">
                Thank you for your interest in protecting our planet! 🌱
            </p>
        </div>
    );
}

export default Volunteer;
