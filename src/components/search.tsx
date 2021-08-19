import React from "react";

function Search() {
    return (
        <div>
            <div className="hcContentContainer">
                <div className="hcBasicSideMargin hcMarginTop4 hcMarginBottom1">
                    <h1>Manuscript search</h1>
                </div>

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
                            <div>5.666 Results</div>
                            <div><select className="" name="">
                                <option value="">Order by Relevance</option>
                                <option value="">Order by given name</option>
                                <option value="">Order by family name</option>
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

                        <div className="hcLists hcMarginBottom2">

                            <div className="hcColumnsAuto hcPointer hcRowCard">
                                <div className="hcCell--x2"><strong>Leiden, UB : ms. VLF 70 : I-A</strong></div>
                                <div>Orléanais</div>
                                <div>0900-1000 $ [10th century]</div>
                            </div>
                            <div className="hcColumnsAuto hcPointer hcRowCard">
                                <div className="hcCell--x2"><strong>Utrecht, UB : Cat. 117</strong>
                                </div>
                                <div>Northern Netherlands</div>
                                <div>1489-1490</div>
                            </div>
                            <div className="hcColumnsAuto hcPointer hcRowCard">
                                <div className="hcCell--x2"><strong>Leiden, UB : ms. VLQ 64</strong></div>
                                <div>France</div>
                                <div>0800-0850 $ [first half 9th century]</div>
                            </div>
                            <div className="hcColumnsAuto hcPointer hcRowCard">
                                <div className="hcCell--x2"><strong>Leiden, UB : ms. VLQ 5</strong></div>
                                <div>1810-10-14<br/></div>
                                <div>1929<br/>Enschede</div>
                            </div>
                            <div className="hcColumnsAuto hcPointer hcRowCard">
                                <div className="hcCell--x2"><strong>Leiden, UB : ms. SCA 49</strong></div>
                                <div>southern German regions</div>
                                <div>0800 $ [ca. 800]</div>
                            </div>
                            <div className="hcColumnsAuto hcPointer hcRowCard">
                                <div className="hcCell--x2"><strong>The Hague, KB : ms. 73 J 7</strong></div>
                                <div>[S.l.]</div>
                                <div>1100-1200 $ [12th century]</div>
                            </div>
                            <div className="hcColumnsAuto hcPointer hcRowCard">
                                <div className="hcCell--x2"><strong>Leiden, UB : ms. BPL 3072</strong></div>
                                <div>Apennine Peninsula</div>
                                <div>1494</div>
                            </div>
                            <div className="hcColumnsAuto hcPointer hcRowCard">
                                <div className="hcCell--x2"><strong>Leiden, UB : ms. VLF 112</strong></div>
                                <div>France</div>
                                <div>0900-1000 $ [10th century]<br/></div>
                            </div>
                            <div className="hcColumnsAuto hcPointer hcRowCard">
                                <div className="hcCell--x2"><strong>The Hague, KB : ms. 70 H 2</strong>
                                </div>
                                <div>[S.l.]</div>
                                <div>1100-1200 $ [12th century]</div>
                            </div>
                        </div>
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
                </div>
            </div>
        </div>
    )
}

export default Search;