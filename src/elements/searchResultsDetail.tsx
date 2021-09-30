import React from "react";
import {IResult, IDetailView} from "../misc/interfaces";

function SearchResultDetail(props: {item: IResult, view: IDetailView}) {
    return (
        <div className="hcColumnsAuto hcPointer hcRowCard" onClick={() => props.view(true, props.item)}>
            <div className="hcCell--x2"><strong>{props.item.title}</strong></div>
            <div>{props.item.origPlace}</div>
            <div>{props.item.origDate}</div>
        </div>
    )
}

export default SearchResultDetail;