import React from "react";
import {IResult, IDetailView} from "../misc/interfaces";
import {toBase64} from "js-base64";

function SearchResultDetail(props: {item: IResult}) {
    function goDetail(item: IResult) {
        window.location.href = "#detail/" + toBase64(JSON.stringify(item));
    }

    return (
        <div className="hcColumnsAuto hcPointer hcRowCard" onClick={() => goDetail(props.item)}>
            <div className="hcCell--x2"><strong>{props.item.title}</strong></div>
            <div>{props.item.origPlace}</div>
            <div>{props.item.origDate}</div>
        </div>
    )
}

export default SearchResultDetail;