import React from "react";
import ReactDOM , {createRoot} from "react-dom/client";



const Title =()=>(
<h1 id="title" key="h2">Food Vella</h1>
);
const HeaderComponent =()=> {
    return (
        <>
        <Title/>
        <div className="nav-items">
            <ul>
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
            </ul>
        </div>
        </>
    );

};
const Body=()=>{
    return <div>
        Body
    </div>
}

const Footer =()=>{
    return 
    <div>
        footer
    </div>
}
const AppLayout =()=>{
    return (
     <>
     <Header/>
     <Body/>
     <Foooter/>
     </>
    );
}
