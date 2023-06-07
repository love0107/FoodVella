import React from "react"
import { burgerKing } from "./config";
import RestronatCard from "./RestrorentCard";
const Body=()=>{
    return <div className="container-body">
        {
           burgerKing.map((items)=>(
           <RestronatCard {...items} key={items.name} />
           ))
        }
    </div>
}

export default Body;