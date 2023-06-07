import React from "react"

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
export default RestronatCard;