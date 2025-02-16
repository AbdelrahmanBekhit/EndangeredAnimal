
import { useState } from "react";
import Header from "../components/Header";

function Donate() {
    const [amount, setAmount] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const handleAmountClick = (value) => {
        setAmount(value);
    };

    const handleDonate = () => {
        if (amount === "" || amount <= 0) {
            alert("Please enter a valid donation amount."); // Prevents invalid donations
            return;
        }
        setShowPopup(true); // Show the pop-up
    };

    const closePopup = () => {
        setShowPopup(false);
        setAmount(""); // Reset amount after donation
    };

    return (
        <div className={`bg-[#d6d5c4] min-h-screen flex flex-col items-center ${showPopup ? "overflow-hidden" : ""}`}>
            <Header />

            {/* Page Title */}
            <h1 className="text-4xl font-bold text-[#4a4a3f] mt-10">Support Our Cause</h1>
            <p className="text-lg text-[#6a6a5d] mt-2 text-center max-w-xl">
                Your donation helps protect endangered species and preserve natural habitats. 
                Every contribution makes a difference.
            </p>

            {/* Donation Card */}
            <div className="bg-[#a8a793] p-8 mt-10 rounded-xl shadow-md max-w-lg w-full text-center">
                <h2 className="text-2xl font-semibold text-[#4a4a3f]">Make a Donation</h2>
                <p className="text-md text-[#6a6a5d] mt-2">Select an amount to donate:</p>

                <div className="flex justify-center gap-4 mt-5">
                    <button 
                        className="px-6 py-2 bg-[#6a6a5d] text-white rounded-lg shadow-md hover:bg-[#4a4a3f]"
                        onClick={() => handleAmountClick("10")}
                    >
                        $10
                    </button>
                    <button 
                        className="px-6 py-2 bg-[#6a6a5d] text-white rounded-lg shadow-md hover:bg-[#4a4a3f]"
                        onClick={() => handleAmountClick("25")}
                    >
                        $25
                    </button>
                    <button 
                        className="px-6 py-2 bg-[#6a6a5d] text-white rounded-lg shadow-md hover:bg-[#4a4a3f]"
                        onClick={() => handleAmountClick("50")}
                    >
                        $50
                    </button>
                </div>

                {/* Custom Amount Input (No Up/Down Buttons) */}
                <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter custom amount" 
                    className="mt-4 w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4a4a3f] text-2xl font-bold text-center 
                    appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none 
                    [-moz-appearance:textfield]" 
                />

                {/* Donate Button */}
                <button 
                    className="mt-6 px-8 py-3 bg-[#4a4a3f] text-white font-bold rounded-lg shadow-md hover:bg-[#3a3a2f]"
                    onClick={handleDonate}
                >
                    Donate Now
                </button>
            </div>

            {/* Pop-up Modal (Same Background as Page) */}
            {showPopup && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#d6d5c4] bg-opacity-90">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
                        <h2 className="text-2xl font-bold text-[#4a4a3f]">Thank You! 💚</h2>
                        <p className="text-[#6a6a5d] mt-2">We truly appreciate your generous donation of <strong>${amount}</strong>!</p>
                        <p className="text-[#6a6a5d] mt-1">Your support helps protect endangered species and preserve nature.</p>
                        
                        <button 
                            className="mt-4 px-6 py-2 bg-[#6a6a5d] text-white rounded-lg shadow-md hover:bg-[#4a4a3f]"
                            onClick={closePopup}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Footer */}
            <p className="mt-8 text-sm text-[#6a6a5d]">
                Thank you for supporting our mission! 💚
            </p>
        </div>
    );
}

export default Donate;
