import React from "react";

import Card from "./Card";
import BlankCard from "./BlankCard";

function viewCards(selected)
{
    let viewItems = [];
    for (let i = 0; i < 3; i++) {
        if(selected[i]== true)
        viewItems.push(<Card/>);
        else
        viewItems.push(<BlankCard/>)                
    }
    return viewItems;
}

function CardList({selected}) {
    return(
        <div className="row">
            {viewCards(selected)};
        </div>
    )
}

export default CardList;
