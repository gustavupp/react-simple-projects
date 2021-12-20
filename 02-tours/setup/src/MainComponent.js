import React, { useState, useEffect } from "react";
import Component1 from "./Component1";

function MainComponent({data, removeItem}) {
    console.log(data)
    return (
        <div className="main-container">
            {data.map((item) => {
                return <Component1 key={item.id} {...item} removeItem={removeItem} />
            })}
        </div>
    )
};

export default MainComponent;