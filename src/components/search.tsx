import React, {useState, useEffect} from "react";
import SearchResultList from "../elements/searchResultList";
import {SERVICE_SERVER} from "../misc/config";
import {IResultList} from "../misc/interfaces";

function Search() {
    const [result, setResult] = useState<IResultList>({} as IResultList);
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(true);


    async function fetchData() {
        const url = SERVICE_SERVER + "browse?page=4";
        const response = await fetch(url);
        const json: IResultList = await response.json();
        //setPages(createPages(json));
        setResult(json);
        setLoading(false);
        setRefresh(refresh);
    }

    useEffect(() => {
        fetchData();
    }, [refresh]);


    return (
        <div>
            <div className="hcContentContainer">
                <div className="hcBasicSideMargin hcMarginTop4 hcMarginBottom1">
                    <h1>Manuscript search</h1>
                </div>
                {loading ? (<div className="loader">Loading...</div>) : (
                <div className="hcLayoutFacet-Result hcBasicSideMargin hcMarginBottom15">

                    <div className="hcLayoutFacets">
                        <button type="button" name="button" id="showFacets" className="hcfixedSideButton"><img
                            src="https://d33wubrfki0l68.cloudfront.net/191a405740a4ade92836ba6eea6a6ceaa798bf2f/a4d8b/images/icons/icon-set-facets.svg"
                            className="icon" /></button>
                        <div className="hcLayoutFacetsToggel" id="hcLayoutFacetsToggel">
                            <div className="hcFacet">
                                <div className="hcFacetTitle">Text search</div>
                                <div className="hcFacetSearch">
                                    <input type="text" name="" value=""/>
                                        <button type="button" name="button">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="hcLayoutResults">
                        <div className="hcResultsHeader hcMarginBottom1">
                            <div>{result.amount} Results</div>
                            <div><select className="" name="">
                                <option value="">Order by Title</option>
                                <option value="">Order by Place</option>
                                <option value="">Order by Date</option>
                            </select></div>
                        </div>

                        <div className="hcMarginBottom2">
                            <span className="hcSmallTxt hcTxtColorGreyMid">Selected facets:</span>
                        </div>

                        <div className="hcList">
                            <div className="hcListHeader">
                                <div className="hcLabel hcListItemLong">Title</div>
                                <div className="hcLabel">Place</div>
                                <div className="hcLabel">Date</div>
                            </div>
                        </div>

                        <SearchResultList lst={result}/>

                        <div className="hcPagination">
                            <div><a href="#">&#8592; Previous</a></div>
                            <div><a href="#">1</a></div>
                            <div className="bgColorBrand2"><a href="#">2</a></div>
                            <div><a href="#">3</a></div>
                            <div><a href="#">4</a></div>
                            <div><a href="#">5</a></div>

                            <div><a href="#">Next &#8594;</a></div>
                        </div>
                    </div>
                </div> )}
            </div>
        </div>
    )
}

export default Search;