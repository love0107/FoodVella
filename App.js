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

const Footer =()=>(
<div>
    footer
</div>
)

const AppLayout =()=>{
   return(
     <>
     <h1>hello there!</h1>
     <HeaderComponent/>
     <Body/>
     <Footer/>
     </>
   );
}
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

