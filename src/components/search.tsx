import React, {useState, useEffect} from "react";
import SearchResultList from "../elements/searchResultList";
import {SERVICE_SERVER} from "../misc/config";
import {IResultList, IResult, ISearchObject, ISortOrder, ISendPage, ISendCandidate, IFacetCandidate, ISearchValues, IResetFacets, IRemoveFacet, IDetailView} from "../misc/interfaces";
import ListFacet from "../facets/listFacet";
import FilterFacet from "../facets/filterFacet";
import FreeTextFacet from "../facets/freeTextFacet";
import Manuscript from "./manuscript";
import PageHeader from "../pageElements/pageHeader";
import {Base64} from "js-base64";

function Search(props: {search_string: string}) {

    let searchBuffer: ISearchObject = {
        searchvalues: "none",
        page: 1,
        page_length: 30,
        sortorder: "title"
    };
    const [result, setResult] = useState<IResultList>({amount: 0} as IResultList);
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(true);
    const [searchStruc, setSearchStruc] = useState(searchBuffer);
    const [pages, setPages] = useState<number[]>([]);
    const [detail, setDetail] = useState(false);
    const [item, setItem] = useState<IResult>({xml: "", origDate: "", origPlace: "", title: "Test", shelfmark: "", itemAuthor: "", itemTitle: "", measure: "", textLang: [], summary: "", layout: ""})

    if (props.search_string !== "none") {
        try {
            searchBuffer = JSON.parse(Base64.fromBase64(props.search_string)) as ISearchObject;
            setSearchStruc(searchBuffer);
        } catch (Error) {
            window.scroll(0, 0);
            window.location.href = "/";
        }
    }

    let numberOfResults: string = "0";
    let pluralResults: string = "";
    if (result.amount === 1) {
        pluralResults = " result";
    } else {
        pluralResults = " results";
    }

    if (result.amount >= 10000) {
        numberOfResults = result.amount.toLocaleString('nl-NL') + "+" + pluralResults;
    } else {
        numberOfResults = result.amount.toLocaleString('nl-NL') + pluralResults;
    }

    let facets: ISearchValues[] = [];
    if (typeof searchStruc.searchvalues === "object") {
        facets = searchStruc.searchvalues as ISearchValues[];
    }

    const cross: string = "[x]";

    async function fetchData() {
        const url = SERVICE_SERVER + "browse";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(searchStruc)
        });
        const json: IResultList = await response.json();
        setResult(json);
        setPages(createPages(json));
        setLoading(false);
        setRefresh(refresh);
    }



    useEffect(() => {
        fetchData();
    }, [refresh]);

    const resetFacets: IResetFacets = () => {
        searchBuffer = searchStruc;
        searchBuffer.page = 1;
        searchBuffer.searchvalues = "none";
        setSearchStruc(searchBuffer);
        setRefresh(!refresh);
    }

    const detailView: IDetailView = (value: boolean, result: IResult) => {
        setDetail(value);
        setItem(result);
    }

    const removeFacet: IRemoveFacet = (field: string, value: string) => {
        searchBuffer = searchStruc;
        if (typeof searchBuffer.searchvalues === "object") {
            searchBuffer.searchvalues.forEach((item: ISearchValues) => {
                if (item.name === field) {
                    item.values = item.values.filter((element => element !== value));
                }
            })
            searchBuffer.searchvalues = searchBuffer.searchvalues.filter(function (el) {
                return el.values.length > 0
            });
            if (searchBuffer.searchvalues.length === 0) {
                searchBuffer.searchvalues = "none";
            }
        }
        setSearchStruc(searchBuffer);
        setRefresh(!refresh);
    }

    const sendCandidate: ISendCandidate = (candidate: IFacetCandidate) => {
        searchBuffer = searchStruc;
        if (searchStruc.searchvalues === "none") {
            searchBuffer.searchvalues = [{
                name: candidate.facet,
                field: candidate.field,
                values: [candidate.candidate]
            } as ISearchValues];
            setSearchStruc(searchBuffer);
            //window.location.href = '#search/' + Base64.toBase64(JSON.stringify(searchStruc));
            setRefresh(!refresh);
        } else {
            if (typeof searchBuffer.searchvalues === "object") {
                let found: boolean = false;
                searchBuffer.searchvalues.forEach((item) => {
                    if (item.name === candidate.facet) {
                        found = true;
                        if (!item.values.includes(candidate.candidate)) {
                            item.values.push(candidate.candidate);
                        }
                    }
                });
                if (!found) {
                    searchBuffer.searchvalues.push({
                        name: candidate.facet,
                        field: candidate.field,
                        values: [candidate.candidate]
                    });
                }
            }
            searchBuffer.page = 1;
            setSearchStruc(searchBuffer);
            setRefresh(!refresh);
            console.log(searchStruc);
            window.scroll(0, 0);
        }
    }


    function createPages(json: IResultList) {
        let arr: number[] = [];
        for (var i: number = 1; i <= json.pages; i++) {
            arr.push(i);
        }
        return arr;
    }

    function nextPage() {
        goToPage(searchStruc.page + 1);
    }

    function selectPage(item: string) {
        const pg: number = Number(item);
        if (pg != NaN) {
            goToPage(pg);
        }
    }

    function prevPage() {
        if (searchStruc.page > 0) {
            goToPage(searchStruc.page - 1);
        }
    }


    const goToPage: ISendPage = (page: number) => {
        searchBuffer = searchStruc;
        searchBuffer.page = page;
        setSearchStruc(searchBuffer);
        setRefresh(!refresh);
        //window.location.href = '#search/' + Base64.toBase64(JSON.stringify(searchStruc));
        window.scroll(0, 0);
    }


    const setSortOrder: ISortOrder = (field: string) => {
        searchBuffer = searchStruc;
        searchBuffer.sortorder = field;
        searchBuffer.page = 1;
        setSearchStruc(searchBuffer);
        setRefresh(!refresh);
    }

    return (
        <div>
            <PageHeader/>
            {detail ?
                (<div className="hcContentContainer">
                    <div className="hcBasicSideMargin hcMarginTop4 hcMarginBottom1">
                        <h1>{item.title}</h1>
                        <div className="hcFormStack hcMarginBottom3 hcBasicSideMargin">
                            <div className="hcStackInfo">
                                <div className="hcClickable">Show TEI file</div>
                                <div className="hcClickable">Edit</div>
                                <div className="hcClickable" onClick={() => setDetail(false)}>Back</div>
                            </div>
                            <div className="hcStackFormItems">
                                <div className="hcLabel">Original place</div>
                                <div className="hcMarginBottom1">{item.origPlace}<br/>
                                    Dordrecht</div>

                                <div className="hcLabel">Original date</div>
                                <div className="hcMarginBottom1">{item.origDate}<br/>
                                </div>

                                <div className="hcLabel">Shelfmark</div>
                                <div className="hcMarginBottom1">{item.shelfmark}<br/>
                                </div>

                                <div className="hcLabel">Title</div>
                                <div className="hcMarginBottom1">{item.itemTitle}<br/>
                                </div>

                                <div className="hcLabel">Author</div>
                                <div className="hcMarginBottom1">{item.itemAuthor}<br/>
                                </div>

                                <div className="hcLabel">Layout</div>
                                <div className="hcMarginBottom1">{item.layout}<br/>
                                </div>

                                <div className="hcLabel">TEI file</div>
                                <div className="hcMarginBottom1">{item.xml}</div>

                            </div>
                        </div>

                    </div>
                </div> )
                :
                (<div className="hcContentContainer">
                <div className="hcBasicSideMargin hcMarginTop1 hcMarginBottom1">
                    <h1>Manuscript search</h1>
                </div>
                {loading ? (<div className="loader">Loading...</div>) : (
                <div className="hcLayoutFacet-Result hcBasicSideMargin hcMarginBottom15">

                    <div className="hcLayoutFacets">
                        <button type="button" name="button" id="showFacets" className="hcfixedSideButton"><img
                            src="https://d33wubrfki0l68.cloudfront.net/191a405740a4ade92836ba6eea6a6ceaa798bf2f/a4d8b/images/icons/icon-set-facets.svg"
                            className="icon" /></button>
                        <div className="hcLayoutFacetsToggel" id="hcLayoutFacetsToggel">

                            <FreeTextFacet add={sendCandidate}/>
                            <FilterFacet parentCallback={sendCandidate} label="title" field="itemTitle" min={5} max={20} />
                            <ListFacet parentCallback={sendCandidate} label="Original language" field="textLang.language" min={5} max={50} />
                            <ListFacet parentCallback={sendCandidate} label="Location" field="location" min={5} max={50} />
                            <ListFacet parentCallback={sendCandidate} label="Original place" field="origPlace" min={5} max={100} />

                        </div>
                    </div>


                    <div className="hcLayoutResults">
                        <div className="hcResultsHeader hcMarginBottom1">
                            <div>{numberOfResults}, page {searchStruc.page} of {result.pages}</div>
                            <div><select className="" name="" value={searchStruc.sortorder} onChange={(e) => {
                                setSortOrder(e.target.value)
                            }} >
                                <option value="title">Order by Title</option>
                                <option value="origPlace">Order by Place</option>
                                <option value="origDate">Order by Date</option>
                            </select></div>
                        </div>

                        <div className="hcMarginBottom2">
                            <div className="hcSmallTxt hcTxtColorGreyMid">Selected facets:
                            <span
                                className="hcFacetReset hcClickable" onClick={resetFacets}>Reset facets</span></div>
                        </div>
                        {searchStruc.searchvalues === "none" ? (
                            <div/>
                        ) : (
                            facets.map((item: ISearchValues) => {
                                return (
                                    <span className="hcSelectedFacet"><span
                                        className="hcSelectedFacetType">{item.name}: </span>
                                        {item.values.map(function (element, i) {
                                            return (<div className="hcFacetValues" key={i}
                                                         onClick={() => removeFacet(item.name, element)}>{element}  </div>)
                                        })}
                                    </span>
                                )
                            })
                        )}

                        <div className="hcList">
                            <div className="hcListHeader">
                                <div className="hcLabel hcListItemLong">Title</div>
                                <div className="hcLabel">Place</div>
                                <div className="hcLabel">Date</div>
                            </div>
                        </div>

                        <SearchResultList lst={result} view={detailView}/>

                        {!loading && result.amount > searchStruc.page_length ? (
                            <div className="hcPagination">
                                {searchStruc.page < 2 ?
                                    (<div/>) : (
                                        <div className="hcClickable" onClick={prevPage}>&#8592; Previous</div>)}
                                <div className="hcClickable">
                                    <select className="hcPageSelector" onChange={(e) => selectPage(e.target.value)}>
                                        {pages.map((pg: number) => {
                                            if (pg === searchStruc.page) {
                                                return (
                                                    <option value={pg} selected>{pg}</option>)
                                            } else {
                                                return (
                                                    <option value={pg}>{pg}</option>)
                                            }
                                        })}
                                    </select>
                                </div>
                                {searchStruc.page < result.pages ? (
                                    <div className="hcClickable" onClick={nextPage}>Next &#8594;</div>
                                ) : (<div/>)}
                            </div>
                        ) : (<div/>)}
                    </div>
                </div> )}
            </div>)}
        </div>
    )
}

export default Search;