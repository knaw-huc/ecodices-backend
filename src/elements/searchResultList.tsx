import React from "react";
import {IResultList, IResult, IDetailView} from "../misc/interfaces";
import SearchResultDetail from "./searchResultsDetail";

function SearchResultList(props: {lst: IResultList, view: IDetailView }) {
    return (
        <div className="hcLists hcMarginBottom2">
            {props.lst.items.map((item) => {
                return (<SearchResultDetail key = {item.xml} item={item} view={props.view}/>)
            })}
        </div>
    )
}

export default SearchResultList;