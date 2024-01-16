// Input.js
import React, { useContext, useState } from "react";
import NameList from "./NameList";
import Chips from "./Chips";
import { MyContext } from "../MyContext";

const Input = () => {
    const {
        isItemBoxVisible,
        setIsItemBoxVisible,
        chipLists,
        inputValue,
        setInputValue,
        setChipLists,
        setNameLists,
        nameLists
    } = useContext(MyContext);

    const [highlightedIndex, setHighlightedIndex] = useState(null);

    const handleKeyDown = (e) => {
        if (e.key === "Backspace" && inputValue === "" && highlightedIndex === null) {
            setHighlightedIndex((prevIndex) => (prevIndex === null ? chipLists.length - 1 : null));
        } else if (e.key === "Backspace" && highlightedIndex >= 0) {
            const updatedChips = chipLists.filter((_, index) => index !== highlightedIndex);
            setChipLists(updatedChips);
            setNameLists([...nameLists, chipLists[highlightedIndex]]);
            setHighlightedIndex(null)
        }
    };

    return (
        <div className="border-b-[3px] border-blue-400 py-2 flex items-center">
            <div className="flex">
                {chipLists.map((name, index) => (
                    <Chips
                        key={index}
                        name={name}
                        isHighlighted={highlightedIndex === index}
                        onClick={() => {
                            setChipLists(chipLists.filter((item) => item !== name));
                            setNameLists([...nameLists, name]);
                        }}
                    />
                ))}
            </div>
            <div className="w-fit">
                <input
                    type="text"
                    value={inputValue}
                    onFocus={() => setIsItemBoxVisible(true)}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className={"w-full focus:outline-none bg-white"}
                    placeholder="Add new User..."
                />
                <div
                    className={
                        isItemBoxVisible ? "absolute my-2 block" : "absolute my-2 hidden"
                    }
                >
                    <NameList />
                </div>
            </div>
        </div>
    );
};

export default Input;
