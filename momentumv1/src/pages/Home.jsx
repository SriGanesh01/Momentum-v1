import React from "react";
import BellIcon from "../images/Bell Icon.svg";
import Menu from "../images/Menu.svg";
import Search from "../images/Search.svg";
import MyProfile from "../images/My Profile.svg";

export default function Home() {
    return (
        <div>
            <div className="flex justify-between px-5 py-7 bg-black">
                <div className="flex items-center">
                    <img src={Menu} alt="Menu" />
                    <p className="mx-2">DASHBOARD</p>
                </div>
                <div className="flex items-center">
                    <form className="mx-2 flex" action="">
                        <input
                            className="bg-[#F56904] text-black rounded-l-full px-2 focus:outline-none h-6 flex"
                            type="image"
                            src={Search}
                            alt="Search"
                        />
                        <input
                            className="rounded-r-full px-2 bg-[#F56904] text-black placeholder-black placeholder-opacity-75 focus:outline-none"
                            type="text"
                           placeholder="Search"
                        />
                    </form>
                    <img className="mx-2 h-5" src={BellIcon} alt="Notifications" />
                </div>
            </div>

            <div className="">

                <div className="flex flex-col ">
                    <div className="flex items-center px-5 py-2">
                        <div className="flex flex-row items-center">
                            <img className="h-10" src={MyProfile} alt="My Profile" /> {/* Adjust the height here */}
                            <p className="ml-2 text-lg ">My Profile</p>
                        </div>
                    </div>

                    <div className="flex items-center px-5 py-2">
                        <div className="flex flex-row items-center">
                            <img className="h-10" src={MyProfile} alt="My Profile" /> {/* Adjust the height here */}
                            <p className="ml-2 text-lg ">Hire New Person</p>
                        </div>
                    </div>

                    <div className="flex items-center px-5 py-2">
                        <div className="flex flex-row items-center">
                            <img className="h-10" src={MyProfile} alt="My Profile" /> {/* Adjust the height here */}
                            <p className="ml-2 text-lg ">New Hire Status</p>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0">
                    <div className="flex items-center px-5 py-2">
                        <div className="flex flex-row items-center">
                            <img className="h-10" src={MyProfile} alt="My Profile" /> {/* Adjust the height here */}
                            <p className="ml-2 text-lg ">About Us</p>
                        </div>
                    </div>

                    <div className="flex items-center px-5 py-2">
                        <div className="flex flex-row items-center">
                            <img className="h-10" src={MyProfile} alt="My Profile" /> {/* Adjust the height here */}
                            <p className="ml-2 text-lg ">Log Out</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
