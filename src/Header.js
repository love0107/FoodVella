import React from "react";
import { logoURL } from "./config";
const Title =()=>(
    <a href="/">
<img  className="title"
alt="logo"
src={logoURL}/>
</a>
);

const HeaderComponent =()=> {
    return (
        <div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
            </ul>
        </div>
        </div>
    );
};

export default HeaderComponent;