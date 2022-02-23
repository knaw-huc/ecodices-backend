import React from "react";
import {IResultList, IResult, IDetailView} from "../misc/interfaces";
import SearchResultDetail from "./searchResultsDetail";

function SearchResultList(props: {lst: IResultList }) {
    return (
        <div className="hcLists hcMarginBottom2">
            {props.lst.items.map((item) => {
                return (<SearchResultDetail key = {item.xml} item={item}/>)
            })}
        </div>
    )
}

export default SearchResultList;