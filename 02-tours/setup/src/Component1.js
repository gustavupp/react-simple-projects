import React, { useState, useEffect } from "react";

const Component1 = ({id, image, info, name, price, removeItem}) => {
    const [readMore,setReadMore] = useState(false);
    return (
        <div className="container">
            <div className="img-container">
                <img src={image} alt={name}></img>
            </div>
            <div className="title-price">
                <h3>{name}</h3>
                <h3>${price}</h3>
            </div>
            <p>{readMore? info: `${info.substring(0,150)}...`}</p>
            <button className="btn" onClick={()=>setReadMore(!readMore)}>{readMore? 'Show Less': 'Read More'}</button>
            <button className="btn" onClick={()=> removeItem(id)}>Not Interested</button>
        </div>
    )
};

export default Component1;

{/* <div className="container">
            <div className="img-container">
                <img src={image} alt={name}></img>
            </div>
            <div className="title-price">
                <h3>{name}</h3>
                <h3>${price}</h3>
            </div>
            <p>{info}</p>
            <button className="btn" onClick={}>Read More</button>
            <button className="btn" onClick={}>Not Interested</button>
        </div> */}