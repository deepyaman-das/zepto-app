import React, { Fragment } from "react";
import Input from "./Input";

const MainContainer = () => {
    return (
        <Fragment>
            <div className="text-blue-600 text-4xl font-bold p-5">Pick Users</div>
            <div className="w-4/6 p-4 relative">
                <Input />
            </div>
        </Fragment>
    );
};

export default MainContainer;