import React from "react";
import ReactDOM , {createRoot} from "react-dom/client";



const Title =()=>(
    <a href="/">
<img  className="title"
alt="logo"
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIQXqMt6WJ-f7Sn6FTCSUk18HbYK-mKhQ08g&usqp=CAU"/>
</a>
);
const burgerKing =[{
        name:"Burger King",
        url: "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/jo6mz8mgv0gblakn1fyh",
        cusines:["Burger", "American"],
        rating:"4.1"
},
{
    name:"Meghana Foods",
    url: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/4df3497f1460dfd1ecd8125222f6d362",
    cusines:["Biryani", "Andhra", "South Indian", "North Indian", "Chinese", "Seafood"],
    rating:"4.2"
},
{
    name:"McDonald's",
    url:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ee5f8e06b300efc07c9fe3f4df40dfc4",
    cusines:["Burgers", "Beverages", "Cafe", "Desserts"],
    rating:"4.3"
},
{
    name:"mummy ke momos",
    url:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gkaot0ksdaiavgibhrfh",
    cusines:["Burger", "American"],
    rating:"4"
},
{
    name:"Anity ji ki kitchen",
    url: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zwbdimjywqorkhanuoft",
    cusines:["Burger", "American"],
    rating:"4.5"
},
{
    name:"JAMA Food Corner",
    url:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/t6t5kairwejurkhrcxmv",
    cusines:["Burger", "American"],
    rating:"4.2"
},
{
    name:"KFC",
    url:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/56c9ab92bd79745fd152a30fa2525426",
    cusines:["Burger", "American"],
    rating:"2.9"
}
]
const RestronatCard = (props) =>{
    return (
        <div className="card">
            <img src={props.url}/>
            <h2>{props.name}</h2>
            <h3>{props.cusines.join(", ")}</h3>
            <h4>{props.rating} stars</h4>
        </div>
    )
}
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
const Body=()=>{
    return <div className="container-body">
        {
burgerKing.map((items)=>(
<RestronatCard {...items} key={items.name} />
))
        }
    </div>
}

const Footer =()=>(
<div className="footer">
    footer
</div>
)
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

