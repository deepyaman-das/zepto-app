import React, { useContext } from "react";
import ListItem from "./ListItem";
import { MyContext } from "../MyContext";

const NameLists = () => {
    const { nameLists, inputValue } = useContext(MyContext);

    return (
        <div className="shadow-neutral-300 shadow-lg border-[3px] border-neutral-300 max-h-56 overflow-y-scroll no-scrollbar bg-neutral-50">
            {nameLists
                .filter((items) =>
                    items.toLowerCase().includes(inputValue.toLowerCase())
                )
                .map((names, index) => (
                    <ListItem
                        key={index}
                        name={names}
                        mailID={
                            names[0].toLowerCase() +
                            "." +
                            names.toLowerCase().split(" ").pop() +
                            "@gmail.com"
                        }
                    />
                ))}
        </div>
    );
};

export default NameLists;