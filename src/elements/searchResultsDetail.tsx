import React from "react";
import {IResult} from "../misc/interfaces";

function SearchResultDetail(props: {item: IResult}) {
    return (
        <div className="hcColumnsAuto hcPointer hcRowCard">
            <div className="hcCell--x2"><strong>{props.item.title}</strong></div>
            <div>{props.item.origPlace}</div>
            <div>{props.item.origDate}</div>
        </div>
    )
}

export default SearchResultDetail;