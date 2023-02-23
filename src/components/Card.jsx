
import React from "react";

const Card = (props) => {

const {client} = props;

let lenguage;
switch (lenguage) {
 case "en":
 lenguage="Hello"
break;
 case "fr":
 lenguage= "Aló"
break;
 case "de":
 lenguage= "Shaiza"
break;
default:
break;
}

 
    return (
        <div className='clientCard' >
        <h3>{lenguage} Hello {client.name}</h3>
        <p>Age:{client.age}</p>
        <p>Is it a Premium client?{client.isPremium}</p>
        </div>
    )
}


export default Card;