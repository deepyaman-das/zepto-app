// Chips.js
import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import profileImg from "../assets/profile-img.png";

const Chips = ({ name, isHighlighted, onClick }) => {
    return (
        <div
            className={`flex items-center mx-1 p-1 bg-neutral-200 rounded-full gap-1 ${isHighlighted ? "border border-blue-500" : ""
                }`}
        >
            <img className="h-5" alt="profile-img" src={profileImg} />
            <p className="text-sm">{name}</p>
            <VscChromeClose className="cursor-pointer" onClick={onClick} />
        </div>
    );
};

export default Chips;
