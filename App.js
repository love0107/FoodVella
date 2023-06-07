import React from "react";
import ReactDOM , {createRoot} from "react-dom/client";
import HeaderComponent from "./src/Header"
import Body from "./src/Body";
import Footer from "./src/Footer";

const AppLayout =()=>{
   return(
     <>
     <HeaderComponent/>
     <Body/>
     <Footer/>
     </>
   );
}
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

