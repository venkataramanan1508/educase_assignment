import React from 'react'

import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    return (

        // This is the Welcome Page of the Project
        <div className="min-h-screen border flex items-center justify-center bg-gray-50 ">
            <div className="w-[320px] h-[550px] flex flex-col items-center justify-end pb-10 bg-gray-100 border border-gray-200">
                <div className="w-full ">
                    <h1 className="text-2xl ml-6 font-bold mb-1">Welcome to PopX</h1>
                    <p className=" text-gray-500 mb-6 px-6">
                        Lorem ipsum dolor sit amet,
                        <br />consectetur adipiscing elit,
                    </p>
                    {/* use for naviage based on the button */}
                    <div className="flex flex-col items-center gap-3 px-6">
                        <button className="w-full bg-[#6C25FF] text-white text-sm font-medium py-2 rounded-md"
                            onClick={() => navigate("/createaccount")}
                        >
                            Create Account
                        </button>
                        <button className="w-full bg-[#CBC3E3] text-black text-sm font-medium py-2 rounded-md"
                            onClick={() => navigate("/login")}
                        >
                            Already Registered? Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home